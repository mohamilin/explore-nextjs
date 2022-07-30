/* eslint-disable @next/next/no-img-element */
// import Icon1 from "../../../public/MainIcon/icon1.png";
// import Icon2 from "../../../public/MainIcon/icon2.png";
// import Icon3 from "../../../public/MainIcon/icon3.png";
// import Icon4 from "../../../public/MainIcon/icon4.png";
// import Icon5 from "../../../public/MainIcon/icon5.png";
// import Icon6 from "../../../public/MainIcon/icon6.png";
// import Icon7 from "../../../public/MainIcon/icon7.png";
// import Icon8 from "../../../public/MainIcon/icon8.png";
// import Icon9 from "../../../public/MainIcon/icon9.png";
// import Icon10 from "../../../public/MainIcon/icon10.png";

// import Image from "next/image";
import React from "react";
import { Container } from "../../moleculs/UI/container";
import ContainerCategory from "../../moleculs/UI/container-category";

const people = [
  {
    name: "Santri Hub",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon1.png",
  },
  {
    name: "Info Kampus",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon2.png",
  },
  {
    name: "Jalur Masuk",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon3.png",
  },
  {
    name: "Beasiswa",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon4.png",
  },
  {
    name: "Event",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon5.png",
  },
  {
    name: "Info Santri",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon6.png",
  },
  {
    name: "Donasi",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon7.png",
  },
  {
    name: "Artikel",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon8.png",
  },
  {
    name: "E-Courses",
    role: "Co-Founder / CTO",
    imageUrl: '../../../MainIcon/icon9.png',
  },
  
  {
    name: "Komunitas",
    role: "Co-Founder / CTO",
    imageUrl:
      "../../../MainIcon/icon10.png",
  },
];

export default function MainFeature() {
  return (
    <section>
      <Container>
        <div>
          <ContainerCategory name={"Kategori"} />
          <div className="bg-white mt-4" >
            <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 lg:py-2">
              <div className="space-y-8 sm:space-y-12">
                <ul
                  role="list"
                  className="rounded-ful mx-auto grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-5 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="space-y-3 ">
                        <div className="mx-auto rounded-full bg-secondary" style={{'height': '70px', 'width':'70px'}}>
                        <div className="inline-block p-1 rounded-full z-40 ">
                        <img
                          className="mx-auto h-14 w-15 rounded-full  "
                          src={person.imageUrl}
                          alt="Icon feature"
                        />
                        </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-xs font-medium lg:text-sm">
                            <h3>{person.name}</h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
         
        </div>
      </Container>
    </section>
  );
}
