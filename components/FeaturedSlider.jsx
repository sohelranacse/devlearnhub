import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArticleSlider from "./ArticleSlider";

function FeaturedSlider({ featured }) {
  return (
    <div className="pt-4">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
      >
        {featured.length > 0 &&
          featured.map((course, i) => (
            <SwiperSlide key={i}>
              <ArticleSlider
                course_title={course.course_title}
                course_slug={course.course_slug}
                course_thumb={course.course_thumb}
                category_name={course.category_name}
                category_slug={course.category_slug}
                published_on={course.publised_date}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default FeaturedSlider;
