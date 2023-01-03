import React ,{ useState, useEffect } from "react";
import Navbar from "./components/navbar";
import "../styles/quizList.module.css";
import Link from "next/link";
import Cookies from 'js-cookie';

export default function Home() {
  
  const [questionLink, setquestionLink] = useState();
  useEffect(() => {
    let cookies=Cookies.get()
    
    PostData();
  }, []);
  const PostData = async (req) => {
    let token = Cookies.get("token");
     
    const res = await fetch("/api/question?type=getQuestionIdList", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "authorization":`bearer ${token}`
      },
    });
    
    const data = await res.json();
    if (!res) {
      setquestionLink(["No data found"]);
    } else {
      setquestionLink(data);
    }
    
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
          <div className="quizlist" key={index}>
          <span>* </span>
          <Link href={`play/${item._id}`}>http://localhost:27017/{item._id}</Link>
          </div>
        )})}
      
    </div>
      
    </>
  )
}