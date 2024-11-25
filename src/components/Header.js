import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCircleUser, faHeart, faStore } from '@fortawesome/free-solid-svg-icons';
import { useDataContext } from '../contexts/DataContext';
import Logo from '../assets/image/logo.webp';
import Logo_sm from '../assets/image/logo.png'
import SearchBar from './SearchBar';
import Toolbar from './Toolbar';

const Header = () => {
  const { sidebarOpen, toggleSidebar, isSmall } = useDataContext();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      {isSmall && <div className='absolute top-6 right-6'>
        <button className="text-gray-600" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      }
      <div className='flex flex-col'>
        <div className={`flex items-center border-b md:min-w-[768px] ${isSmall? 'justify-between my-4 px-8' : 'space-x-4 h-20 justify-between px-2'} lg:px-24`}>
          <div className="flex flex-row items-center space-x-4">
            <img src={isSmall? Logo_sm : Logo} alt="Instacart Logo" className="h-8" />
          </div>

          { !isSmall && <SearchBar /> }
          { !isSmall && <div className="flex items-center gap-6">
            <a href="#loginmodal" data-bs-toggle="modal" className="header-m-link-1">
              <FontAwesomeIcon icon={faHeart} className='w-6 h-6 hover:text-green-400'/>
            </a>

            {/* Link to open cart slider */}
            <a
              href="#"
              className="header-m-link-1 cart-opener relative"
              onClick={(e) => {
                e.preventDefault();
                const cartSlider = document.querySelector('#cartslider');
                if (cartSlider) {
                  // Add logic to open cart slider
                  console.log('Cart slider opened');
                }
              }}
            >
              <FontAwesomeIcon icon={faShoppingCart} className='w-6 h-6 hover:text-green-400' />
              <p className="absolute -top-3 -right-4 header-counter-1 totcart bg-green-500 rounded-full px-2 text-white">0</p>
            </a>

            {/* Link to open login modal */}
            <a href="#loginmodal" data-bs-toggle="modal" className="header-m-link-1">
              <FontAwesomeIcon icon={faCircleUser} className='w-6 h-6 hover:text-green-400'/>
            </a>
            <button className="px-3 py-3 text-white bg-green-600 rounded-full hover:bg-green-700 font-semibold">
              <FontAwesomeIcon icon={faStore} className="me-1" />
              Login to Store
            </button>
          </div>
          }
        </div>
        { !isSmall && <Toolbar /> }
      </div>
      { isSmall && <SearchBar /> }
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-30"
        ></div>
      )}
    </header>
  );
};

export default Header;