import React, { useEffect, useState } from "react";
// import Navbar from "./navbar";
import "../styles/nav.module.css";
import Link from "next/link";

export default function Home() {
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
      >
        <div className="banner_contents">
          <h1 className="banner_title">Quiz Time</h1>
          <div className="banner_buttons">
            <Link href="quizList">
              <button className="banner_button">Play</button>
            </Link>
          </div>
          <h1 className="banner_description"></h1>
          <div className="banner--fadebotton" />
        </div>
      </div>

      <div className="welcome">
        <div className="Heading">
          <span className="moving_Heading">Welcome to Quiz Center</span>
        </div>
      </div>

      <div className="button_div ">
        <div className="button1 student">
          <div>
            <img
              className="student_img"
              src="https://media.istockphoto.com/id/166083848/vector/he-loves-to-learn.jpg?s=612x612&w=0&k=20&c=MaHbSgZFH5bkE7j07GsZGC5qhyGSWNWCiWsMgvCGs-I="
            />
          </div>
          <div>
            <Link href="/signin">
              <button className="button_student">Register Here</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
