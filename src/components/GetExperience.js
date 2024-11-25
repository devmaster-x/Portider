import { motion } from "framer-motion";

function GetExperience() {
  return (
    <motion.div 
      className="h-24 w-full max-w-[1152px] bg-[#B1E5D5] md:flex flex-row mx-auto items-center justify-between rounded-lg shadow-lg my-8 hidden"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img 
        src="https://www.instacart.com/assets/homepage/QR_code_left-d5860cb8e299f89f4a14b7f556d11052dc21f59d54fdd69e2b2154538fc31946.png" 
        alt="" 
        className="h-24 w-[267px]"
      />
      <div className="w-[410px] justify-center">
        <h2 className="text-[18px] leading-[22px] font-semibold text-[#242529] md:text-[24px] md:leading-[28px]">Get the full Instacart experience</h2>
        <div className="text-[12px] leading-[18px] font-normal text-[#242529] md:text-[14px] md:leading-[20px]">Scan the QR code with your camera. First delivery is free.</div>
      </div>
      <img 
        src="https://www.instacart.com/assets/homepage/download_QR_code-ab339f5990df4ab486f77ec8bb373d364096838db9cfd4a7cfc8459633aa1d5b.png" 
        alt="QR code" 
        className="float-right w-24 ml-10 rounded-lg"
      />
    </motion.div>
  )
}

export default GetExperience;