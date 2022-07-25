import "./checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkoutLayout">
        <div className="ticketInfo">
          <span className="ticketInfoTitle">Ticket Info</span>
          <div className="ticketInfoDetail">
            <ol>
              <li>
                Customer(s) can access their ticket(s) from the 'My Profile'
                section on the app/mobile-web.
              </li>
              <li>
                It is mandatory to present the ticket(s) in my profile section
                via app/mobile-web at the venue.
              </li>
              <li>No physical ticket(s) are required to enter the venue.</li>
            </ol>
          </div>
        </div>
        <div className="checkoutDetail">
          <div className="checkoutDetailTitlePrice">
            <span className="checkoutDetailTitle">
              Jo Bolta Hai Vahi Hota Hai ft Harsh Gujral
            </span>
            <span className="checkoutDetailPrice">₹699</span>
          </div>
          <div className="divider"></div>
          <div className="checkoutDetailDateTimeVenue">
            <span className="checkoutDetailDate">Tue, 9 Aug, 2022</span>
            <span className="checkoutDetailTime">07:30 PM</span>
            <span className="checkoutDetailVenue">Venue</span>
            <span className="checkoutDetailLocation">
              Maharana Pratap Auditorium: Noida
            </span>
          </div>
          <div className="divider"></div>
          <div className="checkoutDetailTotalPrice">
            <span className="checkoutDetailTotal">Sub-total</span>
            <span className="checkoutDetailPrice">₹699</span>
          </div>
          <div className="checkoutDetailBookingPrice">
            <span className="checkoutDetailBooking">Booking Fee</span>
            <span className="checkoutDetailPrice">₹57.74</span>
          </div>
          <div className="divider"></div>
          <div className="checkoutDetailAmountPrice">
            <span className="checkoutDetailAmount">Total Amount</span>
            <span className="checkoutDetailPrice">₹756.74</span>
          </div>

          <div className="checkoutDetailBookNow">
            <button className="checkoutDetailBook">
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
