import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useDataContext } from '../contexts/DataContext';
import Collapse from './Collapse';
import footerData from '../constants/footer.json';

function Footer() {
  const { isSmall, isMedium } = useDataContext();

  return (
    <footer>
      <div className="bg-[#f5f5f5] rounded-2xl text-[#343538] px-[5%] max-w-[1360px] mx-auto text-left flex flex-col">
        {isSmall && <div className="flex flex-col items-center border-[#E8E9EB] border-t py-4 mb-4">
          <img 
            src="../assets/image/logo.webp" 
            alt="Instacart Shopper app logo" 
            loading="lazy" 
            decoding="async"
            className='w-[150px] ml-6 mb-4'
          />
          <h2 className="px-4 md:whitespace-nowrap">
            A directory connecting cannabis consumers, patients, retailers, and brands since 2022
          </h2>
        </div> }

        <div className="flex pt-4">
          {!isSmall && 
            <div className="flex w-1/2 lg:w-1/3 flex-col border-[#E8E9EB] mr-4">
              <img 
                src="../assets/image/logo.webp" 
                alt="Instacart Shopper app logo" 
                loading="lazy" 
                decoding="async"
                className='w-[150px] ml-6 mb-4'
              />
              <h2 className="pl-4 md:text-left pr-4">
                A directory connecting cannabis consumers, patients, retailers, and brands since 2022
              </h2>
            </div>
          }
          <div className="grid grid-cols-1 w-full md:w-1/2 lg:w-4/5 lg:grid-cols-3 mt-2 gap-6 mb-12">
            {!isMedium && footerData.map((department, index) =>(
              <div className="department-section" key={index}>
                <h2 className="font-semibold pb-4">{department.title}</h2>
                <ul className="flex flex-col gap-4">
                  {department.content.map((content, c_index) => (
                    typeof content.name === "string" && content.name.trim() !== "icon" 
                    ? <li key={c_index}>
                        <a href={content.link} className='hover:text-[#379f00]'>
                          {content.icon && content.icon === 0 && <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" /> }
                          {content.icon && content.icon === 1 && <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" /> }
                          {content.name}
                        </a>
                      </li>
                    : 
                      <div className="flex space-x-2 justify-start">
                        <a href="#" aria-label="Facebook">
                          <svg width="30px" height="40px" viewBox="0 0 24 24" fill="#379f00" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.827 5.138C3.5 5.78 3.5 6.62 3.5 8.3v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327h4.28v-6.583h-2.215V11.35h2.215V9.459c0-2.196 1.341-3.391 3.3-3.391.938 0 1.745.07 1.98.1v2.295l-1.359.001c-1.065 0-1.271.506-1.271 1.249v1.638h2.54l-.33 2.566h-2.21V20.5h.47c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.327-.642.327-1.482.327-3.162V8.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.22 3.5 17.38 3.5 15.7 3.5H8.3c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311"></path></svg>
                        </a>
                        <a href="#" aria-label="Twitter">
                          <svg width="30px" height="40px" viewBox="0 0 24 24" fill="#379f00" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.475 19.647c7.17 0 11.092-6.02 11.092-11.241 0-.171 0-.341-.012-.51A8 8 0 0 0 21.5 5.85a7.7 7.7 0 0 1-2.239.622 3.96 3.96 0 0 0 1.714-2.185 7.8 7.8 0 0 1-2.476.958 3.864 3.864 0 0 0-4.683-.777c-1.555.844-2.358 2.64-1.96 4.38a11.02 11.02 0 0 1-8.034-4.127C2.788 6.526 3.316 8.836 5.03 9.995A3.8 3.8 0 0 1 3.26 9.5v.05c0 1.881 1.309 3.501 3.127 3.873a3.84 3.84 0 0 1-1.76.068 3.91 3.91 0 0 0 3.642 2.744A7.76 7.76 0 0 1 2.5 17.872a10.93 10.93 0 0 0 5.975 1.772"></path></svg>
                        </a>
                        <a href="#" aria-label="Instagram">
                          <svg width="30px" height="40px" viewBox="0 0 24 24" fill="#379f00" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7zm8.5-.8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path></svg>
                        </a>
                        <a href="#" aria-label="Youtube">
                          <svg width="30px" height="40px" viewBox="0 0 576 512" fill="#379f00" xmlns="http://www.w3.org/2000/svg"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                        </a>
                      </div>
                  ))}
                </ul>
              </div>
            ))}

            {isMedium && footerData.map((department, index) =>(
              <div className="w-full" key={index}>
                <Collapse title={department.title} children={
                  <ul className="flex flex-col gap-4">
                    {department.content.map((content, c_index) => (
                      typeof content.name === "string" && content.name.trim() !== "icon" 
                      ? <li key={c_index}>
                          <a href={content.link}>
                            {content.icon && content.icon === 1 && <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" /> }
                            {content.icon && content.icon === 2 && <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" /> }
                            {content.name}
                          </a>
                        </li>
                      : 
                        <div className="flex space-x-2 justify-center">
                          <a href="#" aria-label="Facebook">
                            <svg width="30px" height="40px" viewBox="0 0 24 24" fill="#379f00" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.827 5.138C3.5 5.78 3.5 6.62 3.5 8.3v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327h4.28v-6.583h-2.215V11.35h2.215V9.459c0-2.196 1.341-3.391 3.3-3.391.938 0 1.745.07 1.98.1v2.295l-1.359.001c-1.065 0-1.271.506-1.271 1.249v1.638h2.54l-.33 2.566h-2.21V20.5h.47c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.327-.642.327-1.482.327-3.162V8.3c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.22 3.5 17.38 3.5 15.7 3.5H8.3c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311"></path></svg>
                          </a>
                          <a href="#" aria-label="Twitter">
                            <svg width="30px" height="40px" viewBox="0 0 24 24" fill="#379f00" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.475 19.647c7.17 0 11.092-6.02 11.092-11.241 0-.171 0-.341-.012-.51A8 8 0 0 0 21.5 5.85a7.7 7.7 0 0 1-2.239.622 3.96 3.96 0 0 0 1.714-2.185 7.8 7.8 0 0 1-2.476.958 3.864 3.864 0 0 0-4.683-.777c-1.555.844-2.358 2.64-1.96 4.38a11.02 11.02 0 0 1-8.034-4.127C2.788 6.526 3.316 8.836 5.03 9.995A3.8 3.8 0 0 1 3.26 9.5v.05c0 1.881 1.309 3.501 3.127 3.873a3.84 3.84 0 0 1-1.76.068 3.91 3.91 0 0 0 3.642 2.744A7.76 7.76 0 0 1 2.5 17.872a10.93 10.93 0 0 0 5.975 1.772"></path></svg>
                          </a>
                          <a href="#" aria-label="Instagram">
                            <svg width="30px" height="40px" viewBox="0 0 24 24" fill="#379f00" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7zm8.5-.8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m5 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path></svg>
                          </a>
                          <a href="#" aria-label="Youtube">
                            <svg width="30px" height="40px" viewBox="0 0 576 512" fill="#379f00" xmlns="http://www.w3.org/2000/svg"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                          </a>
                        </div>
                    ))}
                  </ul>
                } />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-center p-6'>Copyright © <span className='font-bold'>Potrider</span>. Powered by <span className='font-bold'>Autoaid</span></div>
    </footer>
  );
}

export default Footer;
