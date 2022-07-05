import "./bannerCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const BannerCarousel = () => {
    return (
        <Carousel showThumbs={false}>
                <div>
                    <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1656401872092_ssf_web.jpg" />
                </div>
                <div>
                    <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1656936914451_web.jpg" />
                </div>
                {/* <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
        </Carousel>
        
    )
}
export default BannerCarousel;