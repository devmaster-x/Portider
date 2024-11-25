import { motion } from 'framer-motion';
import { useDataContext } from '../contexts/DataContext';
import SubContentBlock from "./SubContentBlock";

function MarketPlace() {
  const { isSmall } = useDataContext();
  return (
    <motion.div 
      className="p-6 rounded-lg max-w-[1152px] mx-auto"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        The largest online grocery <br/>marketplace in North America
      </h2>
      <motion.div 
        className="bg-no-repeat bg-contain w-full h-0 pt-[101%] md:pt-[34.63%] rounded-lg mb-4"
        style={isSmall ? { backgroundImage: `url(/assets/image/marketplace1.jpg)` } : {backgroundImage: 'url(/assets/image/MarketPlace.jpg)'}}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: .6 }}
      >
      </motion.div>
      <SubContentBlock />
    </motion.div>
  )
}

export default MarketPlace;