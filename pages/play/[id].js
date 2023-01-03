// import Navbar from "../Navbar";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import "../../styles/play.module.css";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const id = router.query.id;
  
  const [marks, setmarks] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [question, setquestion] = useState();
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [option, setOption] = useState({
    selectedAnswer: "",
  });

  const { selectedAnswer } = option;

  
  let name, value;

  const handleInputs = (e) => {
    
    name = e.target.name;
    value = e.target.value;
    setOption({ ...option, [name]: value });
  };

  useEffect(() => {
    PostData();
  }, []);
  const PostData = async () => {
    let token = Cookies.get("token");
    const res = await fetch(`/api/question?type=questionlistById&_id=${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${token}`,
      },
    });
    
    const data = await res.json();
    if (!res) {
      setquestion([]);
    } else {
      setquestion(data[0].question);
    }
    
  };

  async function funLost() {
    // let marks1 = await marks;
    window.alert(`you Lost `);
    router.push("http://localhost:3000/teacher");
  }

  async function funEnd(){
    let num=question.length
    
    if(attempt==num-1){
      window.alert(`all question exhausted `);
      router.push("http://localhost:3000/teacher");
    }
  }

  return (
    <>
      {/* <Navbar /> */}
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
                router.push("http://localhost:3000/login");
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

      <div
        className="Baner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://img.freepik.com/premium-vector/neon-icon-quiz-blue-banner-3d-style-white-background-vector-illustration_123447-1788.jpg?w=2000")`,
          backgroundPosition: "center center",
        }}
      ></div>

      <div className="welcome">
        <div className="Heading">
          <span className="moving_Heading">Welcome to Quiz Center</span>
        </div>
      </div>
      <div className="scoreBoardmain">
        <div className="scoreBoard">
          <div className="score">
            Attempt= {attempt} Score= {marks}
          </div>
          <div className="score"></div>
        </div>
      </div>

      {question?.map((item, index) => {
        return (
          <div className="mainquizdivPlay" key={index}>
            <div className="quizDivPlay">
              <div className="quizfirst1Play">
                <div>
                  <div className="questionPlay">
                    <span>{item.question}</span>
                  </div>
                  <div className="optionPlay">
                    <input
                      type="radio"
                      onChange={handleInputs}
                      name="selectedAnswer"
                      value={item.option.first}
                    />{" "}
                    <label> {item.option.first}</label>
                    <input
                      type="radio"
                      onChange={handleInputs}
                      name="selectedAnswer"
                      value={item.option.second}
                    />{" "}
                    <label> {item.option.second}</label>
                    <input
                      type="radio"
                      onChange={handleInputs}
                      name="selectedAnswer"
                      value={item.option.third}
                    />{" "}
                    <label> {item.option.third}</label>
                    <input
                      type="radio"
                      onChange={handleInputs}
                      name="selectedAnswer"
                      value={item.option.forth}
                    />{" "}
                    <label> {item.option.forth}</label>
                  </div>
                  <div className="answerButton">
                    <input
                      className="answerButton1"
                      type="submit"
                      name="answer"
                      value="SUBMIT"
                      onClick={function () {
                        if (selectedAnswer === item.answer) {
                          
                          setmarks(marks + 5);
                          setAttempt(attempt + 1);
                          funEnd()
                        }
                        if (selectedAnswer !== item.answer) {
                          
                          setmarks(marks - 2);
                          setAttempt(attempt + 1);
                          funLost();
                        }

                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="blankdivPlay"></div>
            </div>
          </div>
        );
      })}
    </>
  );
}
