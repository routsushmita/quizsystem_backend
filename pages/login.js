import '../styles/login.module.css';
import Link from 'next/link';

export default function Home() {
    return (
      <>
      <div className="Ldiv1">
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
                // onChange={handleInputs}
                //  value={user.name}
                placeholder="Enter your Email address" name="name"></input><br/>
                <input className="linput1" type="text" 
                // onChange={handleInputs}
                //  value={user.phone}
                  placeholder="Enter your phone number" name="phone"></input><br/>
                <br/>
                <button className="Lbutton3" type="submit"   value="register"
                 //onClick={PostData}
                 > LOGIN</button>
                </form>
                </div>
                
                
            </div>

        </div>
        
      </>
    )
  }
  