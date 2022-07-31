/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Icon1 from "../../../public/MainIcon/icon11.png";
import Icon2 from "../../../public/MainIcon/icon12.png";
import ContainerCategory from "../../moleculs/UI/container-category";
const people = [
  {
    name: "Whitney Francis",
    role: "3 februari 2022",
    imageUrl:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bio: "5 Cara yang bisa kamu lakukan sebagai alternatif kuliah jika kamu mengalami keterbatasan finansial.",
    icon: Icon2,
    profile: Icon1,
  },
  {
    name: "Whitney Francis",
    role: "3 februari 2022",
    imageUrl:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bio: "5 Cara yang bisa kamu lakukan sebagai alternatif kuliah jika kamu mengalami keterbatasan finansial.",
    icon: Icon1,
    profile: Icon1,
  },
  {
    name: "Whitney Francis",
    role: "3 februari 2022",
    imageUrl:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bio: "5 Cara yang bisa kamu lakukan sebagai alternatif kuliah jika kamu mengalami keterbatasan finansial.",
    icon: Icon1,
    profile: Icon1,
  },
  // More people...
];

export default function MainArticel() {
  return (
    <div >
      <ContainerCategory name={"Artikel"} />
      {/* mulai blog nya */}
      <div className="bg-white">
        <div className="mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-6">
          <div className="space-y-12">
            <ul
              role="list"
              className="space-y-12 lg:grid lg:grid-cols-1 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
            >
              {people.map((person) => (
                <div className="flex" key={person.bio}>
                  <div className="mr-4 flex-shrink-0 self-center">
            
                    <div>
                      <img
                        className="h40 w-40 shadow-lg rounded-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                      
                    </div>
                    {/* <div className="absolute -mt-24 px-1">
                        <span className="bg-primary text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                          KATEGORI
                        </span>
                      </div> */}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{person.bio}</h4>
                    <div className="sm:col-span-2 mt-1">
                      <div className="space-y-4">
                        <div className="text-2xl">
                          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                            <div className="flex items-center">
                              <Image
                                className="px-3 "
                                src={person.icon}
                                width={25}
                                height={25}
                              />
                              <h3 className="px-2 text-xs">{person.role}</h3>
                            </div>
                            <div className="flex items-center">
                              <Image
                                className="px-3"
                                src={person.profile}
                                width={25}
                                height={25}
                              />
                              <h3 className="px-2 text-xs">{person.name}</h3>
                            </div>
                            <button
                              type="button"
                              className="inline-flex items-center px-1 py-1 border border-transparent text-xs font-semibold rounded shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Selengkapnya
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
