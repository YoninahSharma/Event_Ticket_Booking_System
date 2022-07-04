import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Event Booking.com</span>
                <input type="text" placeholder="Where are you going?" className="navSearchInput" />
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>

    )
}

export default Navbar