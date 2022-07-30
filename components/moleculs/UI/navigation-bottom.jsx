import React from "react";
import Image from "next/image";

import { createElement } from "react"
import { bottomNavigation } from "../../atomics/navigation-data";
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"

const navigationClasses = isActive => {
  return [
    "inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md",
    isActive ? "text-blue-600 font-semibold" : "text-gray-600",
    "hover:text-blue-600"
  ]
}

export default function NavigationBottom() {
  const router = useRouter()

  const renderItem = item => {
    return (
      <>
        {/* {createElement(item.icon, {
          className: "w-8 h-8",
          "aria-hidden": true
        })} */}
        <Image src={item.icon} width={35} height={35} alt="home"  />
        <span className="text-xs truncate mt-2 ">{item.name}</span>
      </>
    )
  }

  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-20 border-gray-300 z-40">
    <div className="flex items-center justify-center w-full max-w-xl mx-auto bg-nav-bottom rounded-t-3xl h-20 ">
      <ul className="flex items-center justify-evenly w-full  ">
        {bottomNavigation.map(item => {
          const isActive = item.exact
            ? item.href === router.asPath
            : router.asPath.startsWith(item.href)

          return (
            <li key={item.name} className="relative">
              {item.external ? (
                <Link href={item.href}>
                <a
                  className={clsx(...navigationClasses(isActive))}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {renderItem(item)}
                </a>
                </Link>
              ) : (
                <Link href={item.href}>
                  <a className={clsx(...navigationClasses(isActive))}>
                    {renderItem(item)}
                  </a>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  </nav>
)
}
