import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDataContext } from '../contexts/DataContext';

function GuideSection() {
  const { isSmall } = useDataContext();

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-10 max-w-[1552px] mx-auto mt-28 sm:mt-32 mb-8 p-14 relative">
      {isSmall && <div className="relative rounded-tr-xl mx-auto mb-20">
        <img src="../assets/image/guidesection.jpg" alt="Product Image" className="object-cover w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] rounded-3xl rounded-tr-[35%]" />
        <div className="absolute left-20 bottom-6 bg-white/40 p-5 rounded-lg shadow-lg border-2 border-white/50 backdrop-blur-md">
          {/* Product Content */}
          <h3 className="itemname1 md:text-[14px] lg:text-[16px] xl:text-xl font-bold">Lemon Lavender Social Tonic (4pk)</h3>
          <p className="itemname2 text-gray-500">By Cookies Toronto</p>
          <div className="rating-holder-1 flex items-center">
              <span className="text-3xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f5ab24] to-[#f5ab24]">
                  ★★★★★
              </span>
            <p className="rating-cntnt-1 text-sm ml-2">5 (1)</p>
          </div>
        </div>
        <div className="hero-badge-holder flex items-center absolute -bottom-10 -left-14">
          <div className="relative">
            <img src="../assets/image/badge-1.png" alt="Best Selling Product" className="hero-badge-img w-28 h-auto animate-rotate" />
            <h5 className="hero-badge-counter text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">#1</h5>
          </div>
        </div>
      </div>}
      <motion.div className="flex flex-col gap-8 justify-center items-start mx-auto">
        <motion.h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">We Are Potrider.</motion.h1>
        <motion.p className="text-gray-500 md:text-2xl lg:text-3xl font-semibold">Best Deals from Nearby Dispensaries</motion.p>
        <input type="text" placeholder="Find Brands, Products & Dispensaries" className="min-w-[350px] md:w-4/5 px-4 sm:p-6 py-2 sm:py-4 bg-white text-[#343538] placeholder-[#343538] shadow-[4px_4px_10px_4px_rgba(0,0,0,0.1)] border-transparent" />
        <a href="map-listing" className="comm-holder flex gap-3 items-start">
          {/* Left Section */}
          <div className="comm-left flex-shrink-0">
            <img src="../assets/image/hero-img-1.png" alt="community" className="max-w-[120px] h-auto" />
          </div>
          {/* Right Section */}
          <div className="comm-right flex items-start gap-2">
            <div className="comm-right-img-holder">
              <img src="../assets/image/star-1.png" alt="star" className="max-w-[40px] h-auto" />
            </div>
            <div className="comm-right-cntnt-holder">
              <p className="comm-line-1 md:text-md lg:text-lg font-semibold">Join our community</p>
              <p className="comm-line-2 text-base text-gray-600">Get Best Deals!</p>
            </div>
          </div>
        </a>
      </motion.div>
      {!isSmall && <div className="relative rounded-tr-xl">
        <img src="../assets/image/guidesection.jpg" alt="Product Image" className="object-cover xl:w-[500px] xl:h-[600px] md:w-[400px] md:h-[500px] rounded-3xl rounded-tr-[35%]" />
        <div className="absolute left-20 bottom-6 bg-white/40 p-5 rounded-lg shadow-lg border-2 border-white/50 backdrop-blur-md">
          {/* Product Content */}
          <h3 className="itemname1 md:text-[14px] lg:text-[16px] xl:text-xl font-bold">Lemon Lavender Social Tonic (4pk)</h3>
          <p className="itemname2 text-gray-500">By Cookies Toronto</p>
          <div className="rating-holder-1 flex items-center">
              <span className="text-3xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f5ab24] to-[#f5ab24]">
                  ★★★★★
              </span>
            <p className="rating-cntnt-1 text-sm ml-2">5 (1)</p>
          </div>
        </div>
        <div className="hero-badge-holder flex items-center absolute bottom-10 -left-14">
          <div className="relative">
            <img src="../assets/image/badge-1.png" alt="Best Selling Product" className="hero-badge-img w-28 h-auto animate-rotate" />
            <h5 className="hero-badge-counter text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">#1</h5>
          </div>
        </div>
      </div>
    }
    </motion.div>

  );
}

export default GuideSection;

