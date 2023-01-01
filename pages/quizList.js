import React ,{ useState, useEffect } from "react";
import Navbar from "./components/navbar";
import "../styles/quizList.module.css";
import Link from "next/link";


export default function Home() {
  const [questionLink, setquestionLink] = useState();
  useEffect(() => {
    PostData();
  }, []);
  const PostData = async () => {
    const res = await fetch("/api/question?type=getQuestionIdList", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //console.log(res.body, "res============");
    const data = await res.json();
    if (!res) {
      setquestionLink([]);
    } else {
      setquestionLink(data);
    }
    console.log(data, "data========");
  };
  return (
    <>
    <Navbar/>
    <div className="quizlistmain">
      <div className="quizlistHead">
        <div className="quizlistHead1">
          <h1>Quiz List</h1>
        </div>
      </div>

      {questionLink?.map((item, index) => {
        return (
          <div className="quizlist">
          <span>* </span>
          <Link href={`play/${item._id}`}>http://localhost:27017/{item._id}</Link>
          </div>
        )})}
      
    </div>
      
    </>
  )
}