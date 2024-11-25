import React from 'react';
import { motion } from 'framer-motion';
import subcontents from '../constants/subcontents.json';

function SubcontentBlock() {
  return (
    <motion.div 
      className="grid gap-6 grid-cols-1 lg:grid-cols-4"
      initial="hidden"
      animate="visible"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
      }}
    >
      {subcontents.map((item, index) => (
        <motion.div 
          key={index} 
          className="bg-[#F6F7F8] p-8 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h3 className="text-3xl font-bold text-gray-700">{item.title}</h3>
          <p className="text-xl text-gray-600 hidden lg:block pt-4">{item.content}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SubcontentBlock;