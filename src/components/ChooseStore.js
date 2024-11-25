import { motion } from "framer-motion";
import Deliveries from "./Deliveries";
import { useDataContext } from "../contexts/DataContext";
import { subContainerVariants } from "../utils/variants";
import deliveries from '../constants/deliveries.json'

function ChooseStore() {
  const { isSmall, visibleCount, setVisibleCount } = useDataContext();
  const totalCount = deliveries.length;
  
  return (
    <motion.div 
      variants={subContainerVariants} 
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center text-center"
    >
      <h1 className="text-2xl sm:text-3xl font-bold">Choose your store in <span className="text-green-600">Greater Montreal Area, QC</span></h1>
      <Deliveries />
      <span 
        className="text-green-700 hover:underline cursor-pointer font-semibold"
        onClick={()=>{setVisibleCount( visibleCount !== totalCount ? deliveries.length : isSmall ? 4 : 12 )}}
      >
        { visibleCount === totalCount ? 'Show less' : 'Show more'}
      </span>
    </motion.div>
  )
}

export default ChooseStore;