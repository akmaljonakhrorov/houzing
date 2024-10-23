import React, { useRef } from "react";
import { Arrow, Container, Img, Blur, Content } from "./style";
import { Carousel } from "antd";
import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

export const GenCarousel = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.prev();
    if (name === "left") slider.current.next();
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250 / month</Content.Price>
      </Content>
      <Arrow data-name="left" $left="true" onClick={onMove} />
      <Arrow data-name="right" onClick={onMove} />
    </Container>
  );
};
export default GenCarousel;
