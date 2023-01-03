import Cookies from 'js-cookie';
import '../styles/login.module.css';
import Link from 'next/link';
// import Navbar from './navbar';
import React,{useState} from "react";
import { COOKIE_NAME_PRERENDER_BYPASS } from 'next/dist/server/api-utils';
import { Router, useRouter } from 'next/router';

export default function Home() {
const router=useRouter();
  const [user,setUser]=useState({
    email:"",phone:""
})

let name, value;

const handleInputs = (e) =>{
    
    name=e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
}

const PostData =async(e)=>{
    
    e.preventDefault();

    const{email}=user;
    
    const res = await fetch(`/api/user?type=login&email=${email}`,{
        method:"get",
        headers:{
            "Content-Type":"application/json",
            "authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiYzdAZ21haWwuY29tIiwiaWF0IjoxNjcyNTY5NjExLCJleHAiOjE2NzI2NTYwMTF9.7mYp5bSH2nu_dxyuCFfpJR6KFFut6PzUC4oy8V_MVUg"
        }
    })
    
    const data=await res.json();

    if (!res) {
      setUser([]);
    } else {
      setUser(data);
    }
    

    if(data.response==="You do not have account with us , Please Signin"){
        window.alert("Please signIn")
    }
    // if(data[0].role){
      
      if(data.response.role==="admin"){
        
        Cookies.set("token",data.sessionToken);
        router.push("http://localhost:3000/teacher")
      }
      else if(data.response.role==="student"){
        
        Cookies.set("token",data.sessionToken);
        router.push("http://localhost:3000/student")
      }
      
}



    return (
      <>
      <div className="Ldiv1">
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
            <div className="Ldiv2">
                <div  className="Ldiv3">
                <button className="Lbutton1">
                    <Link href="/signin" className="Llink1">
                        Sign Up
                    </Link>
                </button>
                <button className="Lbutton2"> Log In</button><br></br>
                <span className="Lspan1">Login</span>
                <br/>
                <form method="POST">
                <input className="linput1" type="text" 
                onChange={handleInputs}
                 value={user.email}
                placeholder="Enter your Email address" name="email"></input><br/>
                <input className="linput1" type="text" 
                onChange={handleInputs}
                 value={user.phone}
                  placeholder="Enter your phone number" name="phone"></input><br/>
                <br/>
                <button className="Lbutton3" type="submit"   value="register"
                 onClick={PostData}
                 > LOGIN</button>
                </form>
                </div>
                
                
            </div>

        </div>
        
      </>
    )
  }
  