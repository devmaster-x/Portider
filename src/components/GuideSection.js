import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useDataContext } from '../contexts/DataContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GuideSection = () => {
  const { isSmall } = useDataContext();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const guideImages = [
    '/assets/image/guide1.webp',
    '/assets/image/guide2.webp',
    '/assets/image/guide3.webp',
  ];

  const deliverySteps = [
    {
      title: 'Step 1: Browse Products',
      description: 'Explore a wide range of products and select your favorites.',
      svg: '/assets/image/search_product.svg',
    },
    {
      title: 'Step 2: Add to Cart',
      description: 'Add your selected items to the cart and review your order.',
      svg: '/assets/image/product_add.svg',
    },
    {
      title: 'Step 3: Place Order',
      description: 'Complete the checkout process and confirm your delivery details.',
      svg: '/assets/image/place_order.svg',
    },
    {
      title: 'Step 4: Delivery',
      description: 'Sit back and relax while your order is delivered to your doorstep.',
      svg: '/assets/image/deliver.svg',
    },
  ];

  return (
    <motion.div
      className="guide-section py-12 bg-gray-100 mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slider */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <Slider {...sliderSettings}>
            {guideImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="w-full h-[300px] sm:h-[400px]"
              >
                <img
                  src={image}
                  alt={`Guide ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Header Text */}
        <motion.div
            className="text-lg my-8 text-justify"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
              <h1 className="text-xl font-bold mb-3 flex gap-2">
                Potrider's Fastest Weed Delivery Service 
                {!isSmall && <img src="/assets/image/clockx32.png" className="ms-1" alt="🕛" /> }
              </h1>
              <p className="">
                Looking for top-quality cannabis delivery in the GTA, including Halton and Peel Regions? 
                Potrider is your go-to online dispensary, offering premium cannabis products with lightning-fast delivery in under 1 hour. 
                Whether you're in {' '}
                <a href="oakville-weed-delivery" className="text-green-700 underline">Oakville</a>, {' '}
                <a href="mississauga-weed-delivery" className="text-green-700 underline">Mississauga</a>, {' '}
                <a href="brampton-weed-delivery" className="text-green-700 underline">Brampton</a>, {' '}
                <a href="milton-weed-delivery" className="text-green-700 underline">Milton</a>, {' '}
                <a href="acton-weed-delivery" className="text-green-700 underline">Acton</a>, {' '}
                <a href="georgetown-weed-delivery" className="text-green-700 underline">Georgetown</a>, {' '}
                <a href="burlington-weed-delivery" className="text-green-700 underline">Burlington</a>, {' '}
                <a href="etobicoke-weed-delivery" className="text-green-700 underline">Etobicoke</a>, {' '}
                <a href="toronto-weed-delivery" className="text-green-700 underline">Toronto</a>, 
                or beyond, we’ve got you covered. Explore our diverse range of strains, including {' '}
                <a href="https://potrider.ca/sativa-genetic" className="text-green-700 underline">Sativa</a>, {' '}
                <a href="indica-genetic" className="text-green-700 underline">Indica</a>, and {' '}
                <a href="hybrid-genetic" className="text-green-700 underline">Hybrid</a>, and browse our selection of Weed {' '}
                <a href="flower-category" className="text-green-700 underline">Flower</a>, {' '}
                <a href="edible-category" className="text-green-700 underline">Edibles</a>, {' '}
                <a href="vapepen-category" className="text-green-700 underline">Vape Pens</a>, {' '}
                <a href="concentrate-category" className="text-green-700 underline">Concentrates</a>, {' '}
                <a href="cbd-category" className="text-green-700 underline">CBD</a>, {' '}
                <a href="accessory-category" className="text-green-700 underline">Accessories</a>, and {' '}
                <a href="topicals-category" className="text-green-700 underline">Topicals</a>. 
                Shop from our handpicked selections of cannabis.
              </p>
              <p class="cntnt1">
                Experience ultimate shopping convenience with our {' '}
                <strong>Guaranteed One Hour Delivery</strong> or {' '}
                <strong>Receive a FREE Pre-Roll</strong>. {' '}
                We offer a satisfaction guarantee with a replacement option and hassle-free use of your exclusive {' '}
                <a href="potrider-cash-reward-program" className="text-green-700 underline">POTRIDER CA$H</a> 
                {' '}rewards. Our website features a quality label, easy checkout tool, and AI assistance to suggest personalized {' '}
                <a href="coupons" className="text-green-700 underline">coupons</a> 
                {' '}and help you shop better. Available from 10 AM to 10 PM, 7 days a week, our user-friendly platform ensures you find what you need quickly and save more. {' '}
                <a href="shop-fast-cannabis-delivery" className="text-green-700 underline">Order now</a> 
                {' '}and enjoy premium, top-tier cannabis with Potrider’s commitment to fast, reliable, and exceptional service.
              </p>

          </motion.div>

        {/* Delivery Steps */}
        <motion.div
          className="delivery-steps grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {deliverySteps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card p-4 sm:p-6 bg-white rounded-md shadow-md text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img 
                src={step.svg} 
                alt={step.title} 
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" 
              />
              <h3 className="text-base sm:text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GuideSection;
