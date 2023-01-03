import React,{useState} from "react";
import '../styles/signin.module.css';
import Link from 'next/link';
// import Navbar from "./navbar";
import {useRouter} from "next/router"

export default function Home() {
    const router = useRouter();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",address:"",role:""
})

let name, value;

const handleInputs = (e) =>{
    
    name=e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
}

const PostData =async(e)=>{
    
    e.preventDefault();

    const{name,email,phone,address,role}=user;
    if(email==="" && role===""){
        window.alert("Enter the required field")
    }
    else{
        var res = await fetch("/api/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,email,phone,address,role
        })

    })
    var data=await res.json();
    }

    
    if(data==="User Already exist"){
        window.alert("User Already exist")
    }
    else if(!data){
        console.log("nodata")
    }
    else{
        window.alert("Signin successfully, Please Login now")
        if(data.role === "admin"){
            router.push("https://charming-marshmallow-c73595.netlify.app/login")
        }
        if(data.role === "student"){
            router.push("https://charming-marshmallow-c73595.netlify.app/login")
        }
        
    }
    
}


    return (
      <>
      <div className="Sdiv1">
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
            <div className="Sdiv2">
                <div  className="Sdiv3">
                <button className="Sbutton1">Sign Up</button>
                <button className="Sbutton2"> 
                <Link href="/login" className="Slink1">
                    Log In
                    </Link>
                    </button><br></br>
                <span className="Sspan1">Sign Up</span>
                <br/>
                <form method="POST">
                <input className="sinput1" type="text" 
                onChange={handleInputs} value={user.name}
                 placeholder="Enter your name" name="name"></input><br/>
                <input className="sinput1" type="text" 
                onChange={handleInputs} value={user.email} 
                placeholder="Enter your email" name="email"></input><br/>
                <input className="sinput1" type="text" 
                onChange={handleInputs} value={user.phone} 
                placeholder="Enter your Phone Number" name="phone"></input><br/>
                <input className="sinput1" type="text" 
                onChange={handleInputs} value={user.address}
                 placeholder="Enter your address " name="address"></input><br/>
                <input className="sinput1" type="role" 
                onChange={handleInputs} value={user.role}
                 placeholder="Enter your role number" name="role"></input><br/>
                <br/>
                <button className="Sbutton3" type="submit"  value="register" 
                 onClick={PostData}
                > GET STARTED</button>
                </form>
                </div>
                
                
            </div>

        </div>
        
      </>
    )
  }
  