import "./event.css";

const Event = () => {
  return (
    <div className="event">
      <div className="eventBannerContaine">
        <img
          src="https://i.ibb.co/D5Wm5Xr/gaurav-banner.png"
          alt="eventBanner"
          className="eventBanner"
        />
      </div>
      <div className="eventContainer">
        <div className="eventDetail">
          <div className="eventTitleInfo">
            <span className="eventTitle">Gaurav Kapoor Live</span>
            <span className="eventInfo">Comdey Show | Hindi | 2 hrs</span>
          </div>
          <div>
            <button className="bookNow">Book Now</button>
          </div>
        </div>
        <div className="eventDateTimePrice">
          <span className="eventDate">17th July 2022 at 7 PM</span>
          <span className="eventPlace">Maharana Pratap Auditorium: Noida</span>
          <span className="eventPrice">₹499</span>
        </div>
        <div className="eventLayout">
          <div className="artistInfo">
            <span className="artist">Artist</span>
            <span className="artistName">Gaurav Kapoor</span>
            <div className="socialMedia">
              <span>F</span>
              <span>I</span>
              <span>Y</span>
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
          <div className="eventCityPlaceLocation">
            <span className="city">Noida</span>
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
