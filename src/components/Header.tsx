import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="bg-black">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <button onClick={toggleMenu} className="text-white">
          <svg
            viewBox="0 0 10 8"
            width="20"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1h8M1 4h 8M1 7h8"
              stroke="#fff"
              stroke-width="1"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div>
          <p className="text-sm mb-0.5 text-center font-bold text-white italic">
            CREEPY TEEPEE 2k24 12 / 13 / 14 JULY 2024
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-100">
          <div className="flex flex-col items-center justify-center h-full ">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="#"
              className="text-white py-2 font-bold italics capitalize"
            >
              Tickets
            </a>
            <a href="#" className="text-white py-2">
              Artists
            </a>
            <a href="#" className="text-white py-2">
              Location
            </a>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden md:block px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="ml-16">
            <p className="text-lg text-center font-bold text-white italic capitalize">
              CREEPY TEEPEE 2k24 12 / 13 / 14 JULY 2024
            </p>
          </div>
          <div className="mr-4 flex self-end space-x-4">
            <a
              href="https://goout.net/cs/listky/creepy-teepee-2024/tlxw/"
              className="md:hidden text-sm text-center font-bold text-white italic capitalize"
            >
              Tickets
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <a
              href="#"
              className="text-sm text-center font-bold text-white italic capitalize"
            >
              Artists
            </a>
            <a
              href="#"
              className="text-sm text-center font-bold text-white italic capitalize"
            >
              Location
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
