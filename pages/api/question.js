import dbConnection from "../../utils/dbConnection";
import Question from "../../models/question";
import authentication from "./middlewarework/authentication";

export default async function handler(req, res) {
  dbConnection();
  if (req.method === "POST") {
    const data = req.body;
    
    try {
      const Ques = await Question.create(data);
      return res.status(200).json(Ques);
    } catch (e) {
      console.log(e, "error");
    }
  }

  if (req.method === "GET" && req.query.type === "getQuestionIdList") {
    if ((await authentication.authenticate(req)) === "INVALID TOKEN") {
      return res.status(200).json("INVALID TOKEN");
    }
    const Ques2 = await Question.find({}, { _id: 1 });
    res.status(200).json(Ques2);
  }

  if (req.method === "GET" && req.query.type === "questionlist") {
    const Ques2 = await Question.find({});
    res.status(200).json(Ques2);
  }

  if (req.method === "GET" && req.query.type === "questionlistById") {
    if ((await authentication.authenticate(req)) === "INVALID TOKEN") {
      return res.status(200).json("INVALID TOKEN");
    }
    const Ques2 = await Question.find({ _id: req.query._id });
    res.status(200).json(Ques2);
  }
}
