
import React, { useEffect, useState } from "react";
import '../styles/nav.module.css'
import Link from 'next/link';

export default function Home() {
    function truncate(string,n){
        return string?.length>n?string.substr(0,n-1)+ '...' : string ;
    }
    const [show,handleshow] =useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleshow(true);
        }
        else{
            handleshow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return()=> window.removeEventListener("scroll",transitionNavBar)
    },[])
    return (
      <>
      <div className="nav nav_black">
            <div className="nav_contents">
                <img 
                className="nav_logo" 
                src="https://png.pngtree.com/png-clipart/20210418/original/pngtree-quiz-logo-icon-vector-png-image_6234100.jpg"
                />
                <img 
                className="nav_avtar" 
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                />
            </div>
        </div>

        <div className="Baner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://img.freepik.com/premium-vector/neon-icon-quiz-blue-banner-3d-style-white-background-vector-illustration_123447-1788.jpg?w=2000")`,
            backgroundPosition:"center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">Quiz Time</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">Create</button>
                </div>
                <h1 className="banner_description">
                    {truncate(`This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description.`
                    ,150) } 
                </h1>
                <div className="banner--fadebotton"/>
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
                  <Link href="/signin">
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
                <Link href="/signin">
                <button className="button_teacher">Teacher</button>
                </Link>
                </div>
                
                
            </div>
        </div>


      </>
    )
  }
  

// export default function Home() {
//   return (
//     <>
//     <div>
//       <h1>hello kii</h1>
//     </div>
      
//     </>
//   )
// }
