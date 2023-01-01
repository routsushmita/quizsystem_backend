import Navbar from "../components/navbar";
import {useRouter} from "next/router"
import React, { useState, useEffect } from "react";
import '../../styles/play.module.css'

export default function Home() {
  const router = useRouter();
  const id = router.query.id
  console.log(id,"===========")
  const [marks,setmarks]=useState(0);
  const [question, setquestion] = useState();
  const [answer,setAnswer] = useState("");
  const [option,setOption] = useState({
    selectedAnswer:""
  });

  const {
    selectedAnswer
  } = option

  console.log(marks,"marks------")
  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name=e.target.name;
    value = e.target.value;
    setOption({...option, [name]:value});
}

  
  console.log(option,"option=======")
  useEffect(() => {
    PostData();
  }, []);
  const PostData = async () => {
    const res = await fetch(`/api/question??type=questionlistById&_id=${id}`, {
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
    console.log(data, "data34========");
  };

  async function funLost(){
    let marks1=await marks
    window.alert(`you Lost with marks ${marks1}`);
    location.reload();
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
                    <input type="radio" onChange={handleInputs} name="selectedAnswer" value={item.option.first}/> <label> {item.option.first}</label>
                    <input type="radio" onChange={handleInputs} name="selectedAnswer" value={item.option.second}/> <label> {item.option.second}</label>
                    <input type="radio" onChange={handleInputs} name="selectedAnswer" value={item.option.third}/> <label> {item.option.third}</label>
                    <input type="radio" onChange={handleInputs} name="selectedAnswer" value={item.option.forth}/> <label> {item.option.forth}</label>
                  </div>
                  <div className="answerButton">
                    <input className="answerButton1" type="submit" name="answer" value="SUBMIT" onClick={function(){
                      if(selectedAnswer===item.answer){
                        console.log("jeete")
                        setmarks(marks+5)
                      }
                      if(selectedAnswer!==item.answer){
                        console.log("hare")
                        setmarks(marks-2)
                        funLost()
                      }
                  
                      console.log(marks,"pppppppp",selectedAnswer,"selectedAnswer",item.answer,"oooooo")
                    }}/>
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
