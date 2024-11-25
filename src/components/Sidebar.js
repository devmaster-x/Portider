import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useDataContext } from '../contexts/DataContext';
import Logo from '../assets/image/logo.webp';
import sidebarData from '../constants/sidebar.json';

function Sidebar() {
  const { sidebarOpen, toggleSidebar, isSmall } = useDataContext();
  const [ menuIndex, setMenuIndex ] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Canada");
  const modalRef = useRef(null);

  const countries = [
    { 
      name: "Canada", 
      flag: 
      <span className="inline-block w-6 h-6 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
          <circle cx="12" cy="12" r="9.54545" fill="#C4C4C4" stroke="black" strokeWidth="0.909091"/>
          </mask>
          <g mask="url(#mask0)">
          <path d="M5.40717 2.82031H18.916V21.0019H5.40717V2.82031Z" fill="white"/>
          <path d="M-1.34546 2.82031H5.63635V21.0019H-1.34546V2.82031ZM18.3599 2.82031H25.6685V21.0019H18.3636L18.3599 2.82031ZM7.43175 11.6057L6.90228 11.7761L9.34454 13.818C9.53097 14.34 9.28115 14.4927 9.12082 14.7697L11.7682 14.4501L11.7048 16.9891L12.2566 16.9749L12.1336 14.4537L14.7883 14.7555C14.6243 14.4253 14.4789 14.2512 14.628 13.7257L17.0665 11.7903L16.6415 11.6412C16.291 11.3855 16.7906 10.409 16.8652 9.79109C16.8652 9.79109 15.4446 10.2563 15.3514 10.0113L14.986 9.3472L13.6921 10.7037C13.5504 10.7357 13.4908 10.6824 13.4572 10.5688L14.0538 7.73501L13.1067 8.24282C13.0284 8.27833 12.9501 8.24992 12.8979 8.16114L11.9844 6.42111L11.0448 8.22861C10.974 8.29253 10.9031 8.29963 10.8435 8.25702L9.94112 7.77407L10.4855 10.583C10.4408 10.6966 10.3364 10.725 10.217 10.6647L8.9754 9.3259C8.81507 9.57447 8.70694 9.97574 8.49068 10.0681C8.27815 10.1533 7.55852 9.89762 7.07753 9.79819C7.24159 10.3628 7.75614 11.3003 7.43175 11.6092V11.6057Z" fill="#FF0000"/>
          </g>
          <circle cx="12" cy="12" r="10" stroke="#FF0000" strokeWidth="0.454545"/>
        </svg>
      </span> 
    },
    { 
      name: "United States", 
      flag: 
      <span className="inline-block w-6 h-6 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" fill="#B22234"/>
          <path fill="#FFFFFF" d="M0 5.5h64v5.5H0zM0 16.5h64v5.5H0zM0 27.5h64v5.5H0zM0 38.5h64v5.5H0zM0 49.5h64v5.5H0z"/>
          <rect width="25.6" height="19.2" fill="#3C3B6E"/>
          <g fill="#FFFFFF">
            <polygon points="3.2,3.6 4,5.8 6.4,5.8 4.8,7.4 5.6,9.6 3.2,8 0.8,9.6 1.6,7.4 0,5.8 2.4,5.8 "/>
            <polygon points="9.6,3.6 10.4,5.8 12.8,5.8 11.2,7.4 12,9.6 9.6,8 7.2,9.6 8,7.4 6.4,5.8 8.8,5.8 "/>
            <polygon points="16,3.6 16.8,5.8 19.2,5.8 17.6,7.4 18.4,9.6 16,8 13.6,9.6 14.4,7.4 12.8,5.8 15.2,5.8 "/>
            <polygon points="3.2,10 4,12.2 6.4,12.2 4.8,13.8 5.6,16 3.2,14.4 0.8,16 1.6,13.8 0,12.2 2.4,12.2 "/>
            <polygon points="9.6,10 10.4,12.2 12.8,12.2 11.2,13.8 12,16 9.6,14.4 7.2,16 8,13.8 6.4,12.2 8.8,12.2 "/>
          </g>
        </svg>
      </span> 
    },
  ];

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(false);
  };

  useEffect(()=>{
    setMenuIndex(-1);
  },[sidebarOpen]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }

    // Attach the event listener
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setIsModalOpen]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: .4 } }
      }}
    >
      <motion.div
        className={`fixed top-0 left-0 h-full w-full sm:w-[320px] bg-white shadow-lg transition-transform transform z-20 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <motion.div className="p-4">
          <motion.div className='flex pt-4 pb-10 mr-4'>
            <button onClick={() => {
                setMenuIndex(-1);
                toggleSidebar();
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" aria-hidden="true"><path d="M12 10.415 6.292 4.707 4.708 6.291l5.708 5.708-5.708 5.708 1.584 1.584L12 13.583l5.708 5.708 1.584-1.584-5.708-5.708 5.708-5.708-1.584-1.584z"></path></svg>
            </button>
            <motion.div className='flex justify-between w-full'>
              <img 
                src={Logo} 
                alt="Instacart Logo" 
                className="ml-4 h-8"
              />
            </motion.div>
          </motion.div>

          <nav className="space-y-4">
            {sidebarData.map((item, index) => (
              <motion.a
                href={item.link}
                key={index}
                className="flex justify-between items-center text-gray-700 font-semibold cursor-pointer"
                // onClick={() => setMenuIndex(menuIndex === index ? -1 : index)}
              >
                {item.title} 
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#003121" xmlns="http://www.w3.org/2000/svg" color="brandSecondaryDark" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="m12.52 12.001-4.208 4.208 1.584 1.584 5.792-5.792-5.792-5.792-1.584 1.584z"></path></svg>
              </motion.a>  
            ))}
            <button className="px-3 py-3 text-white bg-green-600 rounded-full hover:bg-green-700 font-semibold">
              <FontAwesomeIcon icon={faStore} className="me-1" />
              Login to Store
            </button>
          </nav>
        </motion.div>
      </motion.div>

      {/* Right Panel */}
      {menuIndex !== -1 && sidebarOpen && (
        <motion.div 
          className="fixed left-0 w-full sm:left-[320px] top-0 bottom-0 border-l-[1px] bg-white sm:w-80 p-4 shadow-lg overflow-y-auto z-50"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0.7, x: isSmall ? 500 : -10 }}
          viewport={{ once: false }}
          transition={{ duration: .3 }}
        >
          <motion.div className="absolute top-10 left-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 hover:text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              onClick={()=>setMenuIndex(-1)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.div>
          <ul className="space-y-2 text-gray-700 mt-16 ml-4">
            {sidebarData[menuIndex].list.map((list, index) => (
              <li key={index}>
                <a href={list.link} alt={list.name}> {list.name} </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      {sidebarOpen && (
        <motion.div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-30"
        ></motion.div>
      )}
    </motion.div>
  );
}

export default Sidebar;
