import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { subContainerVariants } from "../utils/variants";
import brands from '../constants/brands.json'

function FeaturedBrands() {
  
  return (
    <motion.div 
      variants={subContainerVariants} 
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center text-center py-12 md:py-24 bg-[#FAFAFA]"
    >
      <h1 className="text-3xl md:text-5xl font-bold py-8">Featured Brands</h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4 xl:mx-auto max-w-[1252px] mx-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {brands.map((delivery, index) => (
          <a href={delivery.link} key={index}>
            <motion.div
              className="flex flex-col bg-white items-center p-2 pb-8 rounded-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer shadow-[0_0_10px_0_rgba(0,0,0,0.1)] relative"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="bg-[#C5C5C5] border-[#E8E8E8] border rounded-[25px] overflow-hidden">
                <img
                  src={delivery.image}
                  alt={delivery.title}
                  className="object-cover"
                />
              </div>
              <FontAwesomeIcon icon={faHeart} className={`absolute bottom-2.5 right-2.5 leading-none bg-transparent border-none transition-all duration-300 ${!delivery.love ? 'text-gray-400' : 'text-green-600'} w-5 h-5 hover:text-red-400`}/>
            </motion.div>
            <div className="flex flex-col justify-center text-center">
              <h2 className="text-lg font-semibold text-gray-800">{delivery.title}</h2>
            </div>
          </a>
        ))}
      </motion.div>


      <button className="px-8 py-3 mt-4 mx-auto rounded-full text-white bg-[#379f00] hover:bg-green-700 text-lg font-bold">
        View All Brands
      </button>
    </motion.div>
  )
}

export default FeaturedBrands;