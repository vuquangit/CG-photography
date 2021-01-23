import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import { updateColorHeader } from "@/store/ThemeHeader";

const slideList = [
  {
    id: 1,
    src: "",
    srcset:
      "https://www.lieben.no/wp-content/uploads/2018/03/lieben_northerners-1200x800.jpg 1200w, https://www.lieben.no/wp-content/uploads/2018/03/lieben_northerners-2048x1365.jpg 2048w, https://www.lieben.no/wp-content/uploads/2018/03/lieben_northerners-2560x1707.jpg 2560w",
    header_color: "#000",
    text: "Ho Chi Minh City, Viet Nam.",
  },
  {
    id: 2,
    src: "",
    srcset:
      "https://www.lieben.no/wp-content/uploads/2018/03/fam_cover-scaled-1200x800.jpg 1200w, https://www.lieben.no/wp-content/uploads/2018/03/fam_cover-scaled-2048x1366.jpg 2048w, https://www.lieben.no/wp-content/uploads/2018/03/fam_cover-scaled.jpg 2560w",
    header_color: "#fff",
    text: "Ho Chi Minh City, Viet Nam.",
  },
  {
    id: 3,
    src: "",
    srcset:
      "https://www.lieben.no/wp-content/uploads/2018/03/nyfodt_cover-scaled-1200x800.jpg 1200w, https://www.lieben.no/wp-content/uploads/2018/03/nyfodt_cover-scaled-2048x1366.jpg 2048w, https://www.lieben.no/wp-content/uploads/2018/03/nyfodt_cover-scaled.jpg 2560w",
    header_color: "#000",
    text: "Ho Chi Minh City, Viet Nam.",
  },
  {
    id: 4,
    src: "",
    srcset:
      "https://www.lieben.no/wp-content/uploads/2018/03/alnesvind-1200x800.jpg 1200w, https://www.lieben.no/wp-content/uploads/2018/03/alnesvind-2048x1365.jpg 2048w, https://www.lieben.no/wp-content/uploads/2018/03/alnesvind-2560x1707.jpg 2560w",
    header_color: "#fafafa",
    text: "Ho Chi Minh City, Viet Nam.",
  },
];

const Carousel: FC = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const dispatch = useDispatch();

  const handleChangeImage = (e) => {
    const colorHeader: string = slideList[e.currentIndex].header_color;
    dispatch(updateColorHeader(colorHeader));
  };

  return (
    <AutoplaySlider
      animation="scaleOutAnimation"
      bullets={false}
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      fillParent={true}
      className="h-full w-full"
      // onFirstMount={(e: any) => handleChangeImage(e)}
      onTransitionStart={(e: any) => handleChangeImage(e)}>
      {slideList.map((item) => (
        <div key={item.id} className="h-full w-full">
          <img
            srcSet={item.srcset}
            alt="slide-image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 text-white w-full text-center text-base">
            {item.text}
          </div>
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default Carousel;
