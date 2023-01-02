import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import "../../styles/play.module.css";
import Cookies from "js-cookie";

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
      <Navbar />

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
          <div className="mainquizdivPlay">
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
