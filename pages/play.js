import Navbar from "./components/navbar";
import React, { useState, useEffect } from "react";
import '../styles/play.module.css'

export default function Home() {
  const [question, setquestion] = useState();
  useEffect(() => {
    PostData();
  }, []);
  const PostData = async () => {
    const res = await fetch("/api/question", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.body, "res============");
    const data = await res.json();
    if (!res) {
      setquestion([]);
    } else {
      setquestion(data[0].question);
    }
    console.log(data, "data========");
  };

  console.log(question, "question========");
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
                    <input type="radio" /> <label> {item.option.first}</label>
                    <input type="radio" /> <label> {item.option.second}</label>
                    <input type="radio" /> <label> {item.option.third}</label>
                    <input type="radio" /> <label> {item.option.forth}</label>
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
