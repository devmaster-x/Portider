import { motion } from 'framer-motion';
import { useDataContext } from '../contexts/DataContext';
import deliveries from '../constants/deliveries.json';

function Deliveries() {
  const { visibleCount } = useDataContext();
  const paginatedItems = deliveries.slice(0, visibleCount);
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mx-auto"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
      }}
    >
      {paginatedItems.map((delivery, index) => (
        <motion.div
          key={index}
          className="flex bg-white rounded-lg p-4 hover:shadow-xl transition-shadow duration-200 min-w-[344px] cursor-pointer shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
          whileHover={{ scale: 1.05 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <img
            src={delivery.image}
            alt={delivery.title}
            className="w-16 h-16 object-cover rounded-full mr-4"
          />
          <div className="flex flex-col justify-center text-start">
            <h2 className="text-lg font-semibold text-gray-800">{delivery.title}</h2>
            <div className={`flex align-middle text-md font-semibold ${delivery.fast ? 'text-green-700' : 'text-gray-500'} mt-1`}>
              { delivery.fast && <span className='pt-1'><svg width="14" height="14" viewBox="0 0 24 24" fill="#108910" xmlns="http://www.w3.org/2000/svg" size="12" color="brandPrimaryRegular" aria-hidden="true"><path d="M12.79 10.33 14.74 2h-1.27L5.54 12.63v1.05h5.67L9.26 22h1.27l7.93-10.62v-1.05z"></path></svg></span>}
              {delivery.time}
            </div>
            <p className={`text-sm font-semibold text-gray-500 mt-1 border-gray-400`}><span className={`${delivery.type ? 'border px-1' : ''}`}>{delivery.type}</span></p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Deliveries;
