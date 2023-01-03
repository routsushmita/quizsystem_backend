
// import { GetServerSideProps } from "next";
import { NextResponse } from "next/server";

export default function middleware(req){
    let verify = req.cookies.get("token");
    let url = req.url
    
    if(!verify && url.includes(['/play/[id]'])){
        return NextResponse.redirect("https://charming-marshmallow-c73595.netlify.app/");
    }
    if(!verify && url.includes(['/quizList'])){
        return NextResponse.redirect("https://charming-marshmallow-c73595.netlify.app/");
    }
    if(!verify && url.includes(['/createquiz'])){
        return NextResponse.redirect("https://charming-marshmallow-c73595.netlify.app/");
    }
    if(!verify && url.includes(['/play'])){
        return NextResponse.redirect("https://charming-marshmallow-c73595.netlify.app/");
    }

    // if (verify) {
    //   return {props:{verify}};
    // }


}