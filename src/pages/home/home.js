import BannerCarousel from "../../component/bannerCarousel/bannerCarousel";
import CardCarousel from "../../component/cardCarousel/cardCarousel";
import "./home.css";


const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <div className="homeContainer">
        <div className="titleContainer">
          <span className="recommended">Recommended events</span>
        </div>
        <CardCarousel />

        <div className="titleContainer">
          <span className="recommended">Events happening near you</span>
        </div>
        <CardCarousel />

        
        <div className="titleContainer">
          <span className="recommended">Explore fun activities around you</span>
        </div>
        <CardCarousel />
      </div>
    </div>
  );
};
export default Home;
