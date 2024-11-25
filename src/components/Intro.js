import React from 'react';
import { motion } from 'framer-motion';
import { useDataContext } from '../contexts/DataContext';
import cards from '../constants/cards.json';

function Intro() {
  const { isSmall } = useDataContext();
  return (
    <motion.div
      className="bg-[#FAFAFA]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: .4 } }
      }}
    >
      <motion.div 
        className="max-w-[1160px] px-4 py-12 md:py-24 mx-auto flex flex-col bg-[#FAFAFA]"
      >
        <h2 className='pb-8 text-3xl md:text-5xl text-center font-bold'>Our Top Deals</h2>
        <p className='pb-8 text-md md:text-xl text-center text-[#616161]'>These are the Top Deals on our Platform so far</p>
        <div className='flex gap-6 overflow-x-auto px-6 pb-6 sm:pb-0'>
          {cards.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col relative w-[343px] min-w-[343px] overflow-hidden mb-4 rounded-[30px] shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: .6 }}
            >
              <img 
                src={item.image} 
                alt="Choose what you want" loading="lazy"
              />
              <div className="flex flex-col justify-start flex-1 bg-[#0D0D0D] text-white text-center rounded-b-lg p-8 pt-8 pb-8">
                <h3 className="text-xl mb-4 ">{item.title}</h3>
                <p className="text-[#B7B7B7]">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="px-8 py-3 my-2 mx-auto rounded-full text-white bg-[#379f00] hover:bg-green-700 text-lg font-bold">
          View All Deals
        </button>

        {/* {isSmall && <motion.div 
          className="flex flex-col rounded-lg relative w-[343px] mx-auto min-w-[343px] overflow-hidden mb-4 justify-center mt-10"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: .6 }}
        >
          <img 
            src="https://www.instacart.com/assets/homepage/native_app_upsell-edf7d22c68687828e3dc2ffa84543d93237446e22f2546c4189c571d0a6f09ed.jpg" 
            alt="Screenshot of Instacart app features" 
          />
          <div className="flex flex-col gap-4 justify-start text-center flex-1 rounded-b-lg pt-8">
            <h3 className="text-xl">Shopping is easier with the free Instacart App</h3>
            <p>See live updates, chat with your shopper, and easily track your order.</p>
            <button
              onClick={()=>{ window.location.href = "https://instacart.app.link/app_download"}}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              data-active="false"
              data-focus-visible="false"
              data-full-width="false"
              data-hover="false"
            >
              <span>Download the app</span>
            </button>
          </div>
        </motion.div>} */}
      </motion.div>
    </motion.div>
  );
}

export default Intro;