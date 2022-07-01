import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Event from "./pages/event/event";
import Checkout from "./pages/checkout/checkout";


function App() {
  return (
    <div>
      <h1>Event Booking System</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="event" element={<Event />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <Link to="/list"> List
      </Link>
    </div>
  );
}

export default App;