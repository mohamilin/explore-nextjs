/* eslint-disable @next/next/no-img-element */
import ContainerCategory from "../../moleculs/UI/container-category";

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // {
  //   title: 'How to use search engine optimization to drive sales',
  //   href: '#',
  //   category: { name: 'Video', href: '#' },
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //   date: 'Mar 10, 2020',
  //   datetime: '2020-03-10',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  //   readingTime: '4 min',
  //   author: {
  //     name: 'Brenna Goyette',
  //     href: '#',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },
  // {
  //   title: 'Improve your customer experience',
  //   href: '#',
  //   category: { name: 'Case Study', href: '#' },
  //   description:
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  //   date: 'Feb 12, 2020',
  //   datetime: '2020-02-12',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  //   readingTime: '11 min',
  //   author: {
  //     name: 'Daniela Metz',
  //     href: '#',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },
];

import Image from "next/image";
import Blog1 from "../../../public/MainHero/1.jpg";
import Blog2 from "../../../public/MainHero/2.jpg";
import Blog3 from "../../../public/MainHero/3.jpg";
import Slider from "react-slick";
import { Alert, Carousel, Card } from "flowbite-react";
import { Container } from "../../moleculs/UI/container";

export default function MainInspiration() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <section>
      <Container>
        <div>
          <ContainerCategory name={"Kisah"} />
        </div>
        <div className="mt-2 mx-4 pb-2 px-3">
          <Slider {...settings} className="mt-3  mx-auto grid gap-5  sm:grid-cols-2  xl:grid-cols-2 lg:grid-cols-2">
            <div className="relative">
              <div className=" bg-white grid place-items-center mx-3">
                <div
                  key={posts[0].title}
                  className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-secondary"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover rounded-b-xl "
                      src={posts[0].imageUrl}
                      alt="sas"
                    />
                  </div>
                  <div className="text-center rounded-t-xl bg-primary mt-0 -z-2  font-semibold h-8 sm:text-center">
                    <p className="text-white mt-1">Muhammad Zimamul Adli</p>
                  </div>
                  <div className="flex-1  px-2 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href={posts[0].href} className="block mt-1">
                        <p className="text-xm font-semibold text-gray-900">
                          {posts[0].title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {posts[0].description}
                        </p>
                      </a>
                    </div>
                    <hr className="mt-2" />
                    <div className="mt-3 mb-1 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={posts[0].author.href}>
                          <span className="sr-only">
                            {posts[0].author.name}
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={posts[0].author.imageUrl}
                            alt="sas"
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={posts[0].author.href}
                            className="hover:underline"
                          >
                            {posts[0].author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <p>{posts[0].author.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" bg-white grid place-items-center mx-3">
                <div
                  key={posts[0].title}
                  className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-secondary"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover rounded-b-xl "
                      src={posts[0].imageUrl}
                      alt="sas"
                    />
                  </div>
                  <div className="text-center rounded-t-xl bg-primary mt-0 -z-2  font-semibold h-8 sm:text-center">
                    <p className="text-white mt-1">Muhammad Zimamul Adli</p>
                  </div>
                  <div className="flex-1  px-2 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href={posts[0].href} className="block mt-1">
                        <p className="text-xm font-semibold text-gray-900">
                          {posts[0].title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {posts[0].description}
                        </p>
                      </a>
                    </div>
                    <hr className="mt-2" />
                    <div className="mt-3 mb-1 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={posts[0].author.href}>
                          <span className="sr-only">
                            {posts[0].author.name}
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={posts[0].author.imageUrl}
                            alt="sas"
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={posts[0].author.href}
                            className="hover:underline"
                          >
                            {posts[0].author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <p>{posts[0].author.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" bg-white grid place-items-center mx-3">
                <div
                  key={posts[0].title}
                  className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-secondary"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover rounded-b-xl "
                      src={posts[0].imageUrl}
                      alt="sas"
                    />
                  </div>
                  <div className="text-center rounded-t-xl bg-primary mt-0 -z-2  font-semibold h-8 sm:text-center">
                    <p className="text-white mt-1">Muhammad Zimamul Adli</p>
                  </div>
                  <div className="flex-1  px-2 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href={posts[0].href} className="block mt-1">
                        <p className="text-xm font-semibold text-gray-900">
                          {posts[0].title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {posts[0].description}
                        </p>
                      </a>
                    </div>
                    <hr className="mt-2" />
                    <div className="mt-3 mb-1 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={posts[0].author.href}>
                          <span className="sr-only">
                            {posts[0].author.name}
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={posts[0].author.imageUrl}
                            alt="sas"
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={posts[0].author.href}
                            className="hover:underline"
                          >
                            {posts[0].author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <p>{posts[0].author.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
    // <div className="relative pb-20 px-2 sm:px-2  lg:pb-1 lg:px-1 mt-10">
    //    <ContainerCategory name={"Kisah Inspirasi"} />
    //   <div className="absolute inset-0">

    //   </div>

    //   <div className="relative max-w-7xl mx-auto">
    //       <div className="mt-12  mx-auto grid gap-5  sm:grid-cols-2  xl:grid-cols-2 lg:grid-cols-2">
    //         {posts.map((post) => (
    //           <div key={post.title} className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-secondary">
    //             <div className="flex-shrink-0">
    //               <img className="h-48 w-full object-cover rounded-b-xl " src={post.imageUrl} alt="sas" />
    //             </div>
    //             <div className="text-center rounded-t-xl bg-primary mt-0 -z-2  font-semibold h-8 sm:text-center">
    //                 <p className="text-white mt-1">
    //                     Muhammad Zimamul Adli
    //                 </p>
    //             </div>
    //             <div className="flex-1  px-2 flex flex-col justify-between">
    //               <div className="flex-1">
    //                 <a href={post.href} className="block mt-1">
    //                   <p className="text-xm font-semibold text-gray-900">{post.title}</p>
    //                   <p className="mt-3 text-base text-gray-500">{post.description}</p>
    //                 </a>
    //               </div>
    //               <hr className="mt-2" />
    //               <div className="mt-3 mb-1 flex items-center">
    //                 <div className="flex-shrink-0">
    //                   <a href={post.author.href}>
    //                     <span className="sr-only">{post.author.name}</span>
    //                     <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="sas" />
    //                   </a>
    //                 </div>
    //                 <div className="ml-3">
    //                   <p className="text-sm font-medium text-gray-900">
    //                     <a href={post.author.href} className="hover:underline">
    //                       {post.author.name}
    //                     </a>
    //                   </p>
    //                   <div className="flex space-x-1 text-sm text-gray-500">
    //                   <p >{post.author.name}</p>

    //                 </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    // </div>
  );
}
