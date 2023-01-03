import React ,{ useState, useEffect } from "react";
// import Navbar from "./Navbar";
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
    {/* <Navbar/> */}
    <div className="nav nav_black">
        <div className="nav_contents">
          <img
            className="nav_logo"
            src="https://png.pngtree.com/png-clipart/20210418/original/pngtree-quiz-logo-icon-vector-png-image_6234100.jpg"
          />
          <div className="navbutton">
            <Link href="/">
              <button className="buttonNav">Home</button>
            </Link>
            <Link href="../login">
              <button className="buttonNav">Login</button>
            </Link>

            <button className="buttonNav">
              <Link href="/signin">Signin</Link>
            </button>

            <button
              className="buttonNav"
              onClick={function () {
                Cookies.set("token", "");
                window.alert("You are logout Of the portal");
                router.push("https://charming-marshmallow-c73595.netlify.app/login");
              }}
            >
              Logout
            </button>
          </div>
          <img
            className="nav_avtar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          />
        </div>
      </div>
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
          <Link href={`play/${item._id}`}>https://charming-marshmallow-c73595.netlify.app/{item._id}</Link>
          </div>
        )})}
      
    </div>
      
    </>
  )
}