import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import sidebarData from '../constants/sidebar.json'

function Toolbar() {

  return (
    <motion.div 
      className="flex justify-between w-full px-2 lg:px-24 items-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: .4 } }
      }}
      >
        
        <ul className="flex gap-4">
          {sidebarData.map((item, index) => (
            <motion.a
              href={item.link}
              key={index}
              className="flex justify-between items-center text-gray-700 font-semibold cursor-pointer"
              // onClick={() => setMenuIndex(menuIndex === index ? -1 : index)}
            >
              <li className='hover:text-green-500 cursor-pointer font-semibold'>{item.title}</li>
            </motion.a>  
          ))}
        </ul>
        
        <button className="px-3 py-3 text-white bg-green-600 hover:bg-green-700 font-semibold">
          <FontAwesomeIcon icon={faStore} className="me-1" />
          Create Your Store
        </button>
    </motion.div>
  );
}

export default Toolbar;
