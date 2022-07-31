/* eslint-disable @next/next/no-img-element */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "../../moleculs/UI/container";

export default function MainBanner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <div className="mx-2 my-8">
        <Slider {...settings}>
          <div>
            {/* mulai banner */}
            <div className="max-h-60 bg-primary overflow-hidden shadow rounded-2xl sm:rounded-lg mx-3">
              <div className="px-4 py-1 sm:p-6">
              <div className="pt-2 pb-2 sm:pt-16 sm:px-2 lg:py-2 xl:px-10">
                  <div className="lg:self-center">
                    <h2 className="text-sm font-semibold text-white sm:text-sm">
                      <span className="block">Update Data</span>
                      <span className="">Pesantren & organisasi Santri</span>
                    </h2>
                    <a
                      href="#"
                      className="mt-2 font-semibold bg-secondary border border-transparent rounded-md shadow px-5 py-2 inline-flex items-center  text-xs text-black hover:bg-indigo-50"
                    >
                      Input Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* akhir banner */}
          </div>
          <div>
            {/* mulai banner */}
            <div className="max-h-60 bg-primary overflow-hidden shadow rounded-2xl sm:rounded-lg mx-3">
              <div className="px-4 py-1 sm:p-6">
              <div className="pt-2 pb-2 sm:pt-16 sm:px-2 lg:py-2 xl:px-10">
                  <div className="lg:self-center">
                    <h2 className="text-sm font-semibold text-white sm:text-sm">
                      <span className="block">Update Data</span>
                      <span className="">Kampus, Jalur Masuk & Event</span>
                    </h2>
                    <a
                      href="#"
                      className="mt-2 font-semibold bg-secondary border border-transparent rounded-md shadow px-5 py-2 inline-flex items-center  text-xs text-black hover:bg-indigo-50"
                    >
                      Input Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* akhir banner */}
          </div>
          <div>
            {/* mulai banner */}
            <div className="max-h-60 bg-primary overflow-hidden shadow rounded-2xl sm:rounded-lg mx-3">
              <div className="px-4 py-1 sm:p-6">
              <div className="pt-2 pb-2 sm:pt-16 sm:px-2 lg:py-2 xl:px-10">
                  <div className="lg:self-center">
                    <h2 className="text-sm font-semibold text-white sm:text-sm">
                      <span className="block">Update Data</span>
                      <span className="">Beasiswa & Event</span>
                    </h2>
                    <a
                      href="#"
                      className="mt-2 font-semibold bg-secondary border border-transparent rounded-md shadow px-5 py-2 inline-flex items-center  text-xs text-black hover:bg-indigo-50"
                    >
                      Input Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* akhir banner */}
          </div>
   
        </Slider>
      </div>
    </Container>
  );
}
