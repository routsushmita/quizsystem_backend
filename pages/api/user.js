import dbConnection from "../../utils/dbConnection";
import User from "../../models/user";



export default async function  handler(req, res) {
  dbConnection();
  if (req.method === "POST") {
      const data = req.body;
      data.addedOn
      console.log(data,"data==")
      try{
        const checkUser = await User.find({email:data.email})
        if(checkUser[0]){
            return res.status(200).json("user already exist")
        }
        const User33 = await User.create(data)
        return res.status(200).json(User33)
      }catch(e){
        console.log(e,"error")
      }
      
    }

    if (req.method === "GET") {
       const User2 = await User.find()
       res.status(200).json(User2)
    }
  }