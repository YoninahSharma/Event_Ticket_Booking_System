import "./eventCard.css";

const EventCard = ({
    item: { cardImg, title, place, rating },
}) => {
    return (
        <div className="eventCard">
            <div className="cardImageContainer">
                <img className="cardImage" src={cardImg} alt="cardImg" />
            </div>
            <div className="cardDetail">
                <span className="eventName">{title}</span>
                <span className="eventRating">{rating} ⭐</span>
                <span className="eventLocation">{place}</span>
            </div>
        </div>
    )
}
export default EventCard;