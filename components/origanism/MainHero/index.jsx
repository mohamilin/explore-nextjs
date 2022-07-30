import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Blog1 from '../../../public/MainHero/1.jpg'
import Blog2 from '../../../public/MainHero/2.jpg'
import Blog3 from '../../../public/MainHero/3.jpg'


import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "../../moleculs/UI/container";

export default function MainHero() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
        cssEase: "linear"
    };
    return (
      <header>
        <Container>
       <div>
       <div className="mt-5 mx-4 pt-2 pb-2 px-3" >
            <Slider {...settings}>
                <div className="relative">
                    <Image
                        className="rounded-lg"
                        src={Blog1}
                        alt="Picture of the author"
                        width={500}
                        height={250}
                    />
                </div>
                <div className="" >
                    <Image
                        className="rounded-lg"
                        src={Blog2}
                        alt="Picture of the author"
                        width={500}
                        height={250}
                    />
                </div>
                <div>
                    <Image
                        className="rounded-lg"
                        src={Blog3}
                        alt="Picture of the author"
                        width={500}
                        height={250}
                    />
                </div>

            </Slider>
        </div>
       </div>
        </Container>
      </header>
    );
}