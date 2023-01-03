import React, { useState } from "react";
import { useRouter } from "next/router";
// import Navbar from "./navbar";
import "../styles/createquiz.module.css";
import Link from "next/link";

export default function CreateQuiz() {
  const router = useRouter();
  const [user, setUser] = useState({
    createdBy: "63b072ebb77b373208a2c6c8",
    question1_question: "",
    question1_level: "",
    question1_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question2_question: "",
    question2_level: "",
    question2_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question3_question: "",
    question3_level: "",
    question3_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question4_question: "",
    question4_level: "",
    question4_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question5_question: "",
    question5_level: "",
    question5_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question6_question: "",
    question6_level: "",
    question6_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question7_question: "",
    question7_level: "",
    question7_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question8_question: "",
    question8_level: "",
    question8_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question9_question: "",
    question9_level: "",
    question9_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
    question10_question: "",
    question10_level: "",
    question10_answer: "",
    question1_option1: "",
    question1_option2: "",
    question1_option3: "",
    question1_option4: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      createdBy,
      question1_question,
      question1_level,
      question1_answer,
      question1_option1,
      question1_option2,
      question1_option3,
      question1_option4,
      question2_question,
      question2_level,
      question2_answer,
      question2_option1,
      question2_option2,
      question2_option3,
      question2_option4,
      question3_question,
      question3_level,
      question3_answer,
      question3_option1,
      question3_option2,
      question3_option3,
      question3_option4,
      question4_question,
      question4_level,
      question4_answer,
      question4_option1,
      question4_option2,
      question4_option3,
      question4_option4,
      question5_question,
      question5_level,
      question5_answer,
      question5_option1,
      question5_option2,
      question5_option3,
      question5_option4,
      question6_question,
      question6_level,
      question6_answer,
      question6_option1,
      question6_option2,
      question6_option3,
      question6_option4,
      question7_question,
      question7_level,
      question7_answer,
      question7_option1,
      question7_option2,
      question7_option3,
      question7_option4,
      question8_question,
      question8_level,
      question8_answer,
      question8_option1,
      question8_option2,
      question8_option3,
      question8_option4,
      question9_question,
      question9_level,
      question9_answer,
      question9_option1,
      question9_option2,
      question9_option3,
      question9_option4,
      question10_question,
      question10_level,
      question10_answer,
      question10_option1,
      question10_option2,
      question10_option3,
      question10_option4,
    } = user;
    const res = await fetch("/api/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        createdBy,
        question: [
          {
            question: question1_question,
            option: {
              first: question1_option1,
              second: question1_option2,
              third: question1_option3,
              forth: question1_option4,
            },
            answer: question1_answer,
            difficultyLevel: question1_level,
          },
          {
            question: question2_question,
            option: {
              first: question2_option1,
              second: question2_option2,
              third: question2_option3,
              forth: question2_option4,
            },
            answer: question2_answer,
            difficultyLevel: question2_level,
          },
          {
            question: question3_question,
            option: {
              first: question3_option1,
              second: question3_option2,
              third: question3_option3,
              forth: question3_option4,
            },
            answer: question3_answer,
            difficultyLevel: question3_level,
          },
          {
            question: question4_question,
            option: {
              first: question4_option1,
              second: question4_option2,
              third: question4_option3,
              forth: question4_option4,
            },
            answer: question4_answer,
            difficultyLevel: question4_level,
          },
          {
            question: question5_question,
            option: {
              first: question5_option1,
              second: question5_option2,
              third: question5_option3,
              forth: question5_option4,
            },
            answer: question5_answer,
            difficultyLevel: question5_level,
          },
          {
            question: question6_question,
            option: {
              first: question6_option1,
              second: question6_option2,
              third: question6_option3,
              forth: question6_option4,
            },
            answer: question6_answer,
            difficultyLevel: question6_level,
          },
          {
            question: question7_question,
            option: {
              first: question7_option1,
              second: question7_option2,
              third: question7_option3,
              forth: question7_option4,
            },
            answer: question7_answer,
            difficultyLevel: question7_level,
          },
          {
            question: question8_question,
            option: {
              first: question8_option1,
              second: question8_option2,
              third: question8_option3,
              forth: question8_option4,
            },
            answer: question8_answer,
            difficultyLevel: question8_level,
          },
          {
            question: question9_question,
            option: {
              first: question9_option1,
              second: question9_option2,
              third: question9_option3,
              forth: question9_option4,
            },
            answer: question9_answer,
            difficultyLevel: question9_level,
          },
          {
            question: question10_question,
            option: {
              first: question10_option1,
              second: question10_option2,
              third: question10_option3,
              forth: question10_option4,
            },
            answer: question10_answer,
            difficultyLevel: question10_level,
          },
        ],
      }),
    });

    const data = await res.json();

    if (data) {
      window.alert("Quiz created successfully");
      router.push("http://localhost:3000/createQuiz");
    }
    if (!data) {
      window.alert("Quiz Not created");
    }
  };

  return (
    <>
      <div className="mainquizdiv">
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
        <form method="POST">
          <div className="quizDiv">
            <div className="quizfirst1">
              <h2>Question1</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question1_question"
                value={user.question1_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question1_option1"
                value={user.question1_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question1_option2"
                value={user.question1_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question1_option3"
                value={user.question1_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question1_option4"
                value={user.question1_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question1_answer"
                value={user.question1_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question1_level"
                value={user.question1_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst2">
              <h2>Question2</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question2_question"
                value={user.question2_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question2_option1"
                value={user.question2_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question2_option2"
                value={user.question2_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question2_option3"
                value={user.question2_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question2_option4"
                value={user.question2_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question2_answer"
                value={user.question2_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question2_level"
                value={user.question2_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst1">
              <h2>Question3</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question3_question"
                value={user.question3_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question3_option1"
                value={user.question3_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question3_option2"
                value={user.question3_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question3_option3"
                value={user.question3_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question3_option4"
                value={user.question3_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question3_answer"
                value={user.question3_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question3_level"
                value={user.question3_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst2">
              <h2>Question4</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question4_question"
                value={user.question4_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question4_option1"
                value={user.question4_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question4_option2"
                value={user.question4_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question4_option3"
                value={user.question4_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question4_option4"
                value={user.question4_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question4_answer"
                value={user.question4_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question4_level"
                value={user.question4_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst1">
              <h2>Question5</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question5_question"
                value={user.question5_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question5_option1"
                value={user.question5_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question5_option2"
                value={user.question5_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question5_option3"
                value={user.question5_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question5_option4"
                value={user.question5_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question5_answer"
                value={user.question5_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question5_level"
                value={user.question5_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst2">
              <h2>Question6</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question6_question"
                value={user.question6_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question6_option1"
                value={user.question6_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question6_option2"
                value={user.question6_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question6_option3"
                value={user.question6_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question6_option4"
                value={user.question6_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question6_answer"
                value={user.question6_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question6_level"
                value={user.question6_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst1">
              <h2>Question7</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question7_question"
                value={user.question7_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question7_option1"
                value={user.question7_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question7_option2"
                value={user.question7_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question7_option3"
                value={user.question7_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question7_option4"
                value={user.question7_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question7_answer"
                value={user.question7_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question7_level"
                value={user.question7_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst2">
              <h2>Question8</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question8_question"
                value={user.question8_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question8_option1"
                value={user.question8_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question8_option2"
                value={user.question8_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question8_option3"
                value={user.question8_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question8_option4"
                value={user.question8_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question8_answer"
                value={user.question8_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question8_level"
                value={user.question8_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst1">
              <h2>Question9</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question9_question"
                value={user.question9_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question9_option1"
                value={user.question9_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question9_option2"
                value={user.question9_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question9_option3"
                value={user.question9_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question9_option4"
                value={user.question9_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question9_answer"
                value={user.question9_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question9_level"
                value={user.question9_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="quizfirst2">
              <h2>Question10</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question10_question"
                value={user.question10_question}
                type="text"
              />
              <h2>Option</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question10_option1"
                value={user.question10_option1}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question10_option2"
                value={user.question10_option2}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question10_option3"
                value={user.question10_option3}
                type="text"
              />{" "}
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question10_option4"
                value={user.question10_option4}
                type="text"
              />
              <h2>Answer</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question10_answer"
                value={user.question10_answer}
                type="text"
              />
              <h2>Difficulty level</h2>
              <input
                className="createQuizinput"
                onChange={handleInputs}
                name="question10_level"
                value={user.question10_level}
                type="text"
              />
            </div>
            <div className="blankdiv"></div>
            <div className="saveButton">
              <button
                onClick={PostData}
                type="submit"
                className="buttonquizsave"
              >
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
