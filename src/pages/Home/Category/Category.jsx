import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
const Category = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3
          className="text-4xl upp
               text-center -mt-16 text-stone-500"
        >
          Salad
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3
          className="text-4xl upp
               text-center -mt-16 text-stone-500"
        >
          Pizza
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3
          className="text-4xl upp
               text-center -mt-16 text-stone-500"
        >
          Soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3
          className="text-4xl upp
               text-center -mt-16 text-stone-500"
        >
          Burger
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
