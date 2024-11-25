import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { subContainerVariants } from "../utils/variants";
import products from '../constants/products.json'

function WideRange() {
  
  return (
    <motion.div 
      variants={subContainerVariants} 
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center text-center py-12 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-bold">Shop From Wide Range</h1>
      <p className='py-8 text-md md:text-xl text-center text-[#616161]'>We have wide range of Concentrates, Edibles, Flower, Gear and Vape Pens</p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {products.map((delivery, index) => (
          <a href={delivery.link} key={index}>
            <motion.div
              className="flex flex-col bg-white max-w-[280px] h-[500px] items-center rounded-lg p-4 hover:shadow-xl transition-shadow duration-200 cursor-pointer shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="bg-[#C5C5C5] border-[#E8E8E8] border rounded-[25px] overflow-hidden mb-5 h-[240px] relative">
                <img
                  src={delivery.image}
                  alt={delivery.title}
                  className="object-cover h-[250px]"
                />
                <FontAwesomeIcon icon={faHeart} className={`absolute top-2.5 right-2.5 leading-none bg-transparent border-none transition-all duration-300 ${!delivery.love ? 'text-gray-400' : 'text-green-600'} w-5 h-5 hover:text-red-400`}/>
              </div>
              <div className="flex flex-col justify-center text-center">
                <h2 className="text-lg font-semibold text-gray-800">{delivery.title}</h2>
                <p className="text-gray-500 font-bold text-md">{delivery.detail}</p>
                <div className="rating-holder-1 flex items-center justify-center">
                  <span className="text-3xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f5ab24] to-[#f5ab24]">
                    {"★".repeat(delivery.rate)}
                  </span>
                  <span className="text-3xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-300">
                    {"★".repeat(5 - delivery.rate)}
                  </span>
                  <p className="rating-cntnt-1 text-sm ml-2">{delivery.rate} ({delivery.count})</p>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>


      <button className="px-8 py-3 mt-4 mx-auto rounded-full text-white bg-[#379f00] hover:bg-green-700 text-lg font-bold">
        View All Products
      </button>

    </motion.div>
  )
}

export default WideRange;