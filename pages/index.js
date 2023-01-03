import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import "../styles/nav.module.css";
import Link from "next/link";

export default function Home() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
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
      >
        <div className="banner_contents">
          <h1 className="banner_title">Quiz Time</h1>
          <div className="banner_buttons"></div>
          <h1 className="banner_description">
            {truncate(
              `Hello learners.... We are here to provide you knowledge for boasting your mind.Join us to have great quizSession with us... `,
              150
            )}
          </h1>
          <div className="banner--fadebotton" />
        </div>
      </div>

      <div className="welcome">
        <div className="Heading">
          <span className="moving_Heading">Welcome to Quiz Center</span>
        </div>
      </div>

      <div className="button_div">
        <div className="button1">
          <div>
            <img
              className="student_img"
              src="https://media.istockphoto.com/id/166083848/vector/he-loves-to-learn.jpg?s=612x612&w=0&k=20&c=MaHbSgZFH5bkE7j07GsZGC5qhyGSWNWCiWsMgvCGs-I="
            />
          </div>
          <div>
            <Link href="/student">
              <button className="button_student">Student</button>
            </Link>
          </div>
        </div>
        <div className="button2">
          <div>
            <img
              className="teacher_logo"
              src="https://storage.googleapis.com/assets.thehindustep.in/img%2Fproducts%2Fback_img%2F450.png"
            />
          </div>
          <div>
            <Link href="/teacher">
              <button className="button_teacher">Teacher</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
