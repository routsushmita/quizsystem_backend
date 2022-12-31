import Link from "next/link"
export default function Navbar() {
  return (
    <>
        <div className="nav nav_black">
            <div className="nav_contents">
                <img 
                className="nav_logo" 
                src="https://png.pngtree.com/png-clipart/20210418/original/pngtree-quiz-logo-icon-vector-png-image_6234100.jpg"
                />
                <div className="navbutton">
                    <Link href="../index">
                    <button className="buttonNav">Home</button>
                    </Link>
                    <Link href="../login">
                    <button className="buttonNav">Login</button>
                    </Link>
                    
                    <button className="buttonNav">
                    <Link href="/signin">
                        Signin</Link></button>
                    
                    
                </div>
                <img 
                className="nav_avtar" 
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                />
            </div>
        </div>
    </>
  )
}