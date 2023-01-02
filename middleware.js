
// import { GetServerSideProps } from "next";
import { NextResponse } from "next/server";

export default function middleware(req){
    let verify = req.cookies.get("token");
    let url = req.url
    
    if(!verify && url.includes(['/play/[id]'])){
        return NextResponse.redirect("http://localhost:3000/");
    }
    if(!verify && url.includes(['/quizList'])){
        return NextResponse.redirect("http://localhost:3000/");
    }
    if(!verify && url.includes(['/createquiz'])){
        return NextResponse.redirect("http://localhost:3000/");
    }
    if(!verify && url.includes(['/play'])){
        return NextResponse.redirect("http://localhost:3000/");
    }

    // if (verify) {
    //   return {props:{verify}};
    // }


}