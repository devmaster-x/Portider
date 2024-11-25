import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Collapse({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <motion.div 
      className="border-b w-full pt-2 p-4 rounded-lg"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: .4 } }
      }}
      >
      <button
        onClick={toggleCollapse}
        className="flex items-center justify-between w-full text-left font-semibold text-lg bg-transparent border-none cursor-pointer"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </button>
      {isOpen && <motion.div 
        className="mt-4"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: .6 }}
      >
        {children}
      </motion.div>}
    </motion.div>
  );
}

export default Collapse;
