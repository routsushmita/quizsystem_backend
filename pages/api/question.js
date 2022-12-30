import dbConnection from "../../utils/dbConnection";
import Question from "../../models/question";



export default async function  handler(req, res) {
  dbConnection();
  if (req.method === "POST") {
      const data = req.body;
      console.log(data,"data==")
      try{
        const Ques = await Question.create(data)
        return res.status(200).json(Ques)
      }catch(e){
        console.log(e,"error")
      }
      
    }

    if (req.method === "GET") {
       const Ques2 = await Question.find()
       res.status(200).json(Ques2)
    }
  }