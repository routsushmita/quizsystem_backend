import dbConnection from "../../utils/dbConnection";
import Result from "../../models/result";



export default async function  handler(req, res) {
  dbConnection();
  if (req.method === "POST") {
      const data = req.body;
      console.log(data,"data==")
      try{
        const Ques = await Result.create(data)
        return res.status(200).json(Ques)
      }catch(e){
        console.log(e,"error")
      }
      
    }

    if (req.method === "GET") {
       const Ques2 = await Result.find()
       res.status(200).json(Ques2)
    }
  }