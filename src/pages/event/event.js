import "./event.css";

const Event = () => {
  return (
    <div className="event">
      <div className="eventBanner">
        <img
          src="https://i.ibb.co/jhLf6sF/gaurav-banner.png"
          alt="eventBanner"
        />
      </div>
      <div className="eventContainer">
        <div className="eventDetail">
          <div>
            <span className="eventTitle">Gaurav Kapoor Live</span>
            <span className="eventInfo">Comdey Show | Hindi | 2 hrs</span>
          </div>
          <div>
            <span className="eventPrice">₹499</span>
          </div>
          <div>
            <button className="bookNow">Book Now</button>
          </div>
        </div>
        <div className="eventLayout">
          <div className="artistInfo">
            <span className="artistName">Gaurav Kapoor</span>
            <div className="socialMedia">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Youtube</span>
            </div>
          </div>
          <div className="eventDescription">
            <span className="descriptionTitle">Why you should attend?</span>
            <span className="descriptionText">
              Gaurav Kapoor has won almost every open-mic he has ever
              participated. His razor-sharp wit will cut deep in your weekly
              blues. You’ll have a good cry..laughing!"
            </span>
          </div>
          <div className="eventLocation">
            <span className="place">Maharana Pratap Auditorium: Noida</span>
            <span className="location">
              Nilgiri Hills Public School, F-1, F Block, Sector 50, Noida, NCR
              201303, India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
