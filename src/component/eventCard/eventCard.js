import "./eventCard.css";

const EventCard = () => {
    return (
        <div className="eventCard">
            <div className="cardImageContainer">
            <img className="cardImage" src=" https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313300-abcuqbxjxy-portrait.jpg" alt="card1" />
            </div>
            <div className="cardDetail">
                <span className="eventName">
                Gaurav Gupta Live - Stand Up comedy Show
                </span>
                <span className="eventLocation">
                Comedy Central, DLF Mall of India, Noida
                </span>
            </div>
        </div>
    )
}
export default EventCard;