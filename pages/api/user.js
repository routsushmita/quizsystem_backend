import dbConnection from "../../utils/dbConnection";
import User from "../../models/user";
import JWTService from "./services/jwt";
import authentication from "./middleware/authentication"


export default async function  handler(req, res) {
  dbConnection();
    if (req.method === "POST") {
        const data = req.body;
        data.addedOn
        console.log(data,"data==")
        try{
          const checkUser = await User.find({email:data.email})
          if(checkUser[0]){
            let decoded = JWTService.decodeJWT(checkUser[0].sessionToken)
            console.log("entry3",decoded)
            if (!decoded) {
              let sessionToken = JWTService.generateSessionToken({email : data.email})
              let response = await User.findOneAndUpdate(
                {"email": data.email},
                {token:sessionToken})
                return res.status(200).json(response)
            }
            return res.status(200).json(checkUser)
          }
          let sessionToken = JWTService.generateSessionToken({email : data.email})
          data.sessionToken=sessionToken;
          const User33 = await User.create(data)
          
          
          return res.status(200).json(User33)
        }catch(e){
          console.log(e,"error")
        }
        
      }

    if (req.method === "GET" && req.query.type === "getuserList") {
      console.log(req,"req=======")
      if(await authentication.authenticate(req)==="INVALID TOKEN"){
        return res.status(200).json("INVALID TOKEN")
      }
       const User2 = await User.find()
       res.status(200).json(User2)
    }

    if(req.method === "GET" && req.query.type === "login"){
      const getUser= await User.find({email:req.query.email})
      let response
      if(getUser.length===0){
       res.status(200).json("You do not have account with us , Please Signin") 
        return
      }
      res.status(200).json(getUser)
    }
  }