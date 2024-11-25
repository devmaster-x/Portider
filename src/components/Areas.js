import { motion } from "framer-motion";

function Areas() {
  return (
    <div className="flex flex-col justify-center text-center w-1/2 mx-auto mb-12">
      <h1 className="text-3xl md:text-5xl font-bold">Areas We Deliver</h1>
      <p className="py-8 text-md md:text-xl text-center text-[#616161]">
        Select a country from below to check if we are available in your area
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* USA */}
        <motion.a 
          href="#" 
          className="flex w-full items-center justify-center flex-wrap rounded-[10px] overflow-hidden shadow-lg transition-all duration-300 relative"
          whileHover="hover"
          initial="hidden"
          animate="visible"
        >
          {/* Parent Hover State Controls Both */}
          <motion.img
            src="../assets/image/US.webp"
            alt="USA"
            className="object-cover h-full w-full align-middle"
            variants={{
              hover: { scale: 1.2 },
              hidden: { scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="absolute z-10 font-bold text-2xl text-white text-center"
            variants={{
              hover: { scale: 1.5, opacity: 1 },
              hidden: { scale: 1, opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            USA
          </motion.p>
        </motion.a>

        {/* Canada */}
        <motion.a 
          href="#" 
          className="flex w-full items-center justify-center flex-wrap rounded-[10px] overflow-hidden shadow-lg transition-all duration-300 relative"
          whileHover="hover"
          initial="hidden"
          animate="visible"
        >
          {/* Parent Hover State Controls Both */}
          <motion.img
            src="../assets/image/Canada.webp"
            alt="Canada"
            className="object-cover h-full w-full align-middle"
            variants={{
              hover: { scale: 1.2 },
              hidden: { scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="absolute z-10 font-bold text-2xl text-white text-center"
            variants={{
              hover: { scale: 1.5, opacity: 1 },
              hidden: { scale: 1, opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            CANADA
          </motion.p>
        </motion.a>
      </div>
    </div>
  );
}

export default Areas;
