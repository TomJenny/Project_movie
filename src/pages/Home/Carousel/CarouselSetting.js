import {
  CarouselArrowBackground,
  CarouselArrowLeft,
  CarouselArrowRight,
} from "./CarouselElement";

//Custom arrow slick
const ArrowRight = ({ currentSlide, slideCount, children, ...props }) => (
  <CarouselArrowBackground {...props} right>
    {children}
    <CarouselArrowRight />
  </CarouselArrowBackground>
);
const ArrowLeft = ({ currentSlide, slideCount, children, ...props }) => (
  <CarouselArrowBackground {...props} left>
    <CarouselArrowLeft />
  </CarouselArrowBackground>
);

export const settings = {
  infinite: true,
  fade: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  autoplay: true,
  arrows: true,
};
