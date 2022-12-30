export default function Home() {
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
                {/* <h1 className="banner_title">Play Quiz</h1> */}
                {/* <div className="banner_buttons"> */}
                    {/* <button className="banner_button">Play</button> */}
                    {/* <button className="banner_button">Create</button> */}
                {/* </div> */}
                {/* <h1 className="banner_description">
                    {truncate(`This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description. This is banner description.`
                    ,150) } 
                </h1> */}
                {/* <div className="banner--fadebotton"/> */}
            </div> 
        </div>

        <div className="welcome">
            <div className="Heading">
                <span className="moving_Heading">Welcome to Quiz Center</span>
            </div>
        </div>

        <div className="question_div">
            <div className="button1">
                <div>
                    <div className="question">
                        <span>What is your name?</span>
                    </div>
                    <div className="option">
                        <input type='radio'/> <label> Raju</label>
                        <input type='radio'/> <label> Golu</label>
                        <input type='radio'/> <label> Siya</label>
                        <input type='radio'/> <label> Juggu</label>
                    </div>
                    <div>
                    <button className="button_student">Student</button>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    </>
  )
}