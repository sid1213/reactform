import React from "react";
import { Carousel, Typography } from "antd";
import bgImage from "../images/background-img.png";
import logo from "../images/logo.png";
import style from "./style.module.scss";
import facebookIcon from "../images/icons/facebook.svg";
import linkedinIcon from "../images/icons/linkedin.svg";
import instaIcon from "../images/icons/instagram.svg";
import { AiOutlineGlobal } from "react-icons/ai";

const { Title } = Typography;

const CarouselContainer = () => {
  return (
    <div className="carousel">
      <img
        src={bgImage}
        alt="background-image"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
      <div className="w-[10%]">
        <img src={logo} alt="logo" className="w-full object-contain" />
      </div>
      <div>
        <Carousel
          autoplay
          className={`${style.typography} text-white text-2xl h-4/6`}
        >
          <div>
            <Title level={1}>100% Uptime😎</Title>
            <Title level={2} type="secondary">
              Zero Infrastructure
            </Title>
            <Title level={2} type="secondary">
              Management
            </Title>
          </div>
          <div>
            <Title level={1}>100% Uptime😎</Title>
            <Title level={2} type="secondary">
              Zero Infrastructure
            </Title>
            <Title level={2} type="secondary">
              Management
            </Title>
          </div>
          <div>
            <Title level={1}>100% Uptime😎</Title>
            <Title level={2} type="secondary">
              Zero Infrastructure
            </Title>
            <Title level={2} type="secondary">
              Management
            </Title>
          </div>
        </Carousel>
        <div className="mt-24 flex justify-between items-center">
          <div>
            <a
              href="https://aesthisia.com/"
              className="flex space-x-1 items-center"
            >
              <AiOutlineGlobal size={20} />
              <p>aesthisia.com</p>
            </a>
          </div>
          <div className=" flex space-x-3 ">
            <a href="https://www.linkedin.com/company/aesthisia/">
              <img src={linkedinIcon} alt="linkedinIcon" className="w-4" />
            </a>
            <a href="https://www.facebook.com/aesthisia/">
              <img src={facebookIcon} alt="facebookIcon" className="w-4" />
            </a>
            <a href="https://www.instagram.com/aesthisia/">
              <img src={instaIcon} alt="facebookIcon" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
