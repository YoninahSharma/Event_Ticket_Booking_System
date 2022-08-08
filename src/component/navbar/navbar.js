import "./navbar.css";
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo"><Link to="/" style={{textDecoration:'none', color:'white'}}>EventBooking.com</Link></span>
               
                <button className="navButton">
                    <Link to="/login" style={{textDecoration:'none', color:'black'}}>Login</Link>
                </button>
            </div>
        </div>

    )
}

export default Navbar