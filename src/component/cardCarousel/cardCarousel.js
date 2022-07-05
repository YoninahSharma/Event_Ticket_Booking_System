import "./cardCarousel.css";
import { Carousel } from '@trendyol-js/react-carousel';
import EventCard from "../eventCard/eventCard";

const CardCarousel = () => {
    return (
    <Carousel show={5} slide={2} transition={0.5}>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
    </Carousel>
    )
}
export default CardCarousel;