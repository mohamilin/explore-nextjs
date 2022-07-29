import React from "react";
import Image from "next/image";
import Akun from "../../../public/StickNav/akun.png";
import Home from "../../../public/StickNav/home.png";
import Kalender from "../../../public/StickNav/kalender.png";
import Kampus from "../../../public/StickNav/kampus.png";
import Santri from "../../../public/StickNav/santri.png";

export default function NavigationBottom() {
  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-34 px-2  border-gray-300 z-35">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto bg-nav-bottom rounded-t-3xl">
        <div className=" mt-0 mb-2 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-5 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-0  text-sm leading-6 font-medium text-indigo-200">Info Kampus</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
            <Image src={Kampus} width={25} height={25} alt="logo" />

            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-0  text-sm  leading-6 font-medium text-indigo-200">Info Santri</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
            <Image src={Santri} width={25} height={25} alt="logo" />
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-0 text-sm  leading-6 font-medium text-indigo-200">Home</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
            <Image src={Home} width={25} height={25} alt="logo" />
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-0  text-sm  leading-6 font-medium text-indigo-200">Kalender</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
            <Image src={Kalender} width={25} height={25} alt="logo" />
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-0  text-sm  leading-6 font-medium text-indigo-200">Akun</dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
            <Image src={Akun} width={25} height={25} alt="logo" />
            </dd>
          </div>
        </div>
      </div>
    </nav>
  );
}
