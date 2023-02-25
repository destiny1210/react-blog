import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png"
import { AuthContext } from "../context/authContext";

const Navbar = () => {
    const { currentUser, logout }= useContext(AuthContext);
    
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to ="/">
                    <img src={Logo}/>
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className="link" to="/?cat=tech">
                        <h6>TECH</h6>
                    </Link>
                    <Link className="link" to="/?cat=movies">
                        <h6>MOVIES</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ?  (
                        <span onClick={logout}>Logout</span>
                    ) : (
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    )}
                    <span className="write">
                        <Link classname ="link" to="/write">Write</Link>
                    </span>
                </div>
            </div> 
        </div>
    )
}

export default Navbar