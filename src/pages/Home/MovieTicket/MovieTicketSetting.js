import { CarouselArrowLeft, CarouselArrowRight } from "./MovieTicketElement";

const ArrowRight = ({ currentSlide, slideCount, children, ...props }) => (
  <CarouselArrowRight {...props}>{children}</CarouselArrowRight>
);
const ArrowLeft = ({ currentSlide, slideCount, children, ...props }) => (
  <CarouselArrowLeft {...props}>{children}</CarouselArrowLeft>
);

const settings = {
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  variableWidth: true,
  speed: 500,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        dots: false,
        arrows: false,
        rows: 1,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        initialSlide: 1,
        arrows: false,
        rows: 1,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
};

export default settings;
