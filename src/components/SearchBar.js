import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDataContext } from "../contexts/DataContext";
import hotitems from '../constants/hotSearch.json'

function SearchBar() {
  const { isSmall } = useDataContext();
  const [isClicked, setClicked] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className="flex-grow mx-8 relative mb-4 md:mb-0 max-w-[1048px]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } },
      }}
    >
      {/* Input */}
      <input
        type="text"
        placeholder="Search products and stores"
        className="w-full h-10 pr-10 pl-4 sm:pl-10 sm:pr-4 py-2 border rounded-[28px] border-gray-300 focus:outline-none focus:border-gray-400 bg-[#F6F7F8] text-[#343538] placeholder-[#343538]"
        onClick={() => setClicked(true)}
      />

      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-3 sm:left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#343538]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
        />
      </svg>

      {/* Dropdown */}
      {isClicked && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 border z-10"
        >
          <div className="p-4 text-gray-700 font-semibold">Popular Searches</div>
          <div className="grid grid-cols-2 gap-2 p-4">
            {hotitems.map((item, index) => (
              <a href={item.link} key={index}>
                <div
                  className="flex items-center gap-2 p-2 bg-gray-100 hover:bg-gray-500 cursor-pointer rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 object-cover rounded-md"
                  />
                  <span className="text-sm overflow-clip">{item.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default SearchBar;
