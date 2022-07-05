import BannerCarousel from "../../component/bannerCarousel/bannerCarousel";
import "./home.css";
import { Carousel } from "@trendyol-js/react-carousel";
import EventCard from "../../component/eventCard/eventCard";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <div className="homeContainer">
        <div className="titleContainer">
          <span className="recommended">Recommended events</span>
        </div>
        <Carousel show={5} slide={2} transition={0.5}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
