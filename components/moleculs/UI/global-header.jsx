import Link from "next/link";
import React, { createElement } from "react";
import { Popover } from "@headlessui/react";
import Images from "next/image";
import { useRouter } from "next/router";

import { Container } from "./container";
export default function GlobalHeader() {
  const router = useRouter();
  console.log("router GlobalHeader", router.pathname);
  let leftHeader;
  if (router.pathname == "/") {
    leftHeader = "Homepage";
  } else {
    leftHeader = 'sd'
  }
  return (
    <header className="flex items-center justify-center fixed w-full h-32 z-40 bg-white ">
      <Container className="flex items-center justify-between rounded-b-3xl h-full pl-4 bg-primary">
        <Link href="/ass">
          <a className="align-middle">
            <Images src="/logonav.png" width={45} height={45} />
          </a>
        </Link>
        <div className="-mr-4">
          <div className="col-span-1 rounded-lg divide-y divide-gray-200">
            <div className="w-full flex items-center justify-between p-4 space-x-4">
              {/* <div className="flex-1 truncate mr-2">
                <div className="flex items-center space-x-4">
                  <h3 className="text-gray-900 text-sm font-medium truncate">
                    Muhammad Zimamul Adli
                  </h3>
                </div>
                <p className="mt-1 mr-2 text-gray-500 text-sm truncate">
                  Institut Pertanian Bogor
                </p>
              </div>
              <Images
                className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                src="/profile.png"
                width={50}
                height={50}
                alt=""
              /> */}
              <span className="inline-flex ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -mr-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
              </span>
              <span className="inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                      <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
