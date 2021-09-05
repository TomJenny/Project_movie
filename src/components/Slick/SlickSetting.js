import { LeftOutlined, RightOutlined } from "@ant-design/icons";

//Custom arrow slick
const ArrowRight = ({ currentSlide, slideCount, children, ...props }) => (
  <RightOutlined
    {...props}
    style={{
      color: "red",
      fontSize: "40px",
      position: "absolute",
      zIndex: "999999",
      right: "-25px",
    }}
  >
    {children}
  </RightOutlined>
);
const ArrowLeft = ({ currentSlide, slideCount, children, ...props }) => (
  <LeftOutlined
    {...props}
    style={{
      color: "red",
      fontSize: "40px",
      position: "absolute",
      zIndex: "99999",
      left: "-40px",
    }}
  >
    {children}
  </LeftOutlined>
);

//Setting and responsive for slick slider
export const settings = {
  infinite: true,
  fade: true,
  speed: 500,
  slidesPerRow: 4,
  rows: 2,
  autoplay: true,
  arrows: true,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        infinite: true,
        dots: false,
        arrows: false,
        rows: 2,
        slidesPerRow: 3,
      },
    },
    {
      breakpoint: 577,
      settings: {
        initialSlide: 2,
        arrows: false,
        rows: 2,
        slidesPerRow: 2,
      },
    },
    {
      breakpoint: 412,
      settings: {
        arrows: false,
        rows: 2,
        slidesPerRow: 1,
      },
    },
  ],
};
