import React, { useState } from 'react';
import { motion } from 'framer-motion';
import questionsData from '../constants/questions.json';

const CommonQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="mx-auto max-w-[950px] p-8 sm:pb-8 md:pb-16 md:px-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: .4 } }
      }}
    >
      <h2 className="text-center text-[#343538] mb-8 text-2xl sm:text-3xl font-semibold leading-[32px] md:mb-6 md:leading-[28px] md:font-semibold">Common Questions</h2>
      {questionsData.map((faq, index) => {
        const answerWithLineBreaks = faq.answer.replace(/\n/g, "<br />");
        return (
          <motion.div 
            key={index} 
            className="border-b border-[#E8E9EB] py-4 md:py-6"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: .6 }}
          >
            <h3>
              <button
                aria-controls={`faq-${index}`}
                aria-expanded={openIndex === index ? 'true' : 'false'}
                className="flex items-center justify-between w-full bg-transparent border-none cursor-pointer text-[#424242] p-0 h-auto text-left whitespace-normal antialiased text-2xl leading-9 md:text-[28px] md:leading-8"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <div className="flex justify-center items-center text-[#343538] my-6 ml-[15%] md:ml-[25%]">
                  {openIndex === index ?
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4 10.879h16v2.24H4z"></path>
                    </svg> :
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" aria-hidden="true">
                      <path d="M10.88 13.12V20h2.24v-6.88H20v-2.24h-6.88V4h-2.24v6.88H4v2.24z"></path>
                    </svg>
                  }
                </div>
              </button>
            </h3>
            {openIndex === index && (
              <motion.div
                id={`faq-${index}`}
                className="mt-2 text-xl text-gray-600 rounded-lg"
                dangerouslySetInnerHTML={{ __html: answerWithLineBreaks }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: .6 }}
              />
            )}
        </motion.div>
      )})}
    </motion.div>
  );
};

export default CommonQuestions;
