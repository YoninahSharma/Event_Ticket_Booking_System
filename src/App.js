import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Event from "./pages/event/event";
import Checkout from "./pages/checkout/checkout";
import Navbar from "./component/navbar/navbar";
import Error404 from "./pages/error/error404";
import Thankyou from "./pages/thankyou/thankyou";
import Footer from "./component/footer/footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="event" element={<Event />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="thankyou" element={<Thankyou />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
