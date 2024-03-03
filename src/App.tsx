import React from "react"
import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <a
          href="https://goout.net/cs/listky/creepy-teepee-2024/tlxw/"
          className="absolute top-32 lg:top-[50vh] right-8 lg:right-40 rotate-[35deg] z-10 bg-black rounded px-1 md:px-3 text-white font-bold italic text-[12px] lg:text-3xl"
        >
          TICKETS
          <span className="ml-2">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </a>
      </div>
      <div className="md:hidden absolute top-44 right-4  -rotate-[25deg] z-10 px-1 bg-black rounded font-bold text-[8px] text-white italics max-w-30 text-wrap">
        More info soon!
      </div>
      <img
        src="/mainImage2k24.jpg"
        alt="main event poster"
        className="w-full h-auto object-cover"
      />
      <div className="flex justify-center items-center text-[9px]">
        <p className="text-center font-bold text-white italic my-1">
          © 2024 All rights reserved | CREEPY TEEPEE
        </p>

        <a
          className=" text-white ml-2"
          href="https://www.instagram.com/creepyteepeefestival/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="text-stone-200 ml-2"
          href="https://www.facebook.com/events/s/creepy-teepee-2k24/788784219759777/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  )
}

export default App
