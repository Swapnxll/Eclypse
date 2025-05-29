import React from 'react';
import { useNavigate } from 'react-router-dom';

type NavbarProps = {
  isDarkBackground?: boolean; // true if background is dark, else false
};

const Navbar: React.FC<NavbarProps> = ({ isDarkBackground = true }) => {
  const navigate = useNavigate();

  return (
    <nav
      className={`
        mx-auto relative rounded-[5px] 
        backdrop-blur-md shadow-md
        flex items-center justify-between
        px-2 sm:px-4 md:px-8 lg:px-12
        h-[45.46px] sm:h-[60px]
        max-w-full sm:max-w-[1169px]
        top-[12.9px]
        ${isDarkBackground ? 'bg-black bg-opacity-20 text-white' : 'bg-white bg-opacity-80 text-black'}
      `}
      style={{ top: '12.9px' }}
    >
      {/* Logo */}
      <div
        className={`
          cursor-pointer flex items-center justify-center
          rounded-[5px] w-[64px] h-[60px]
          sm:rounded-[2px] sm:w-[48px] sm:h-[45px]
        `}
      >
        <img src='https://res.cloudinary.com/do48h78id/image/upload/v1748506119/logo_cgg3wo.jpg' alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Nav links */}
      <div className="flex gap-10 items-center">
        <button
          className={`font-primary text-[16px] font-normal leading-[100%] tracking-[-0.02em] ${
            isDarkBackground ? 'text-white h-[23px]' : 'text-black h-[23px]'
          }`}
        >
          About Us
        </button>

        <button
          className={`font-primary text-[16px] font-normal leading-[100%] tracking-[-0.02em] ${
            isDarkBackground ? 'text-white h-[23px]' : 'text-black h-[23px]'
          }`}
        >
          Waitlist
        </button>

        <button
          onClick={() => {
            navigate('/cart');
          }}
          className={`font-primary text-[16px] font-normal leading-[100%] tracking-[-0.02em] ${
            isDarkBackground ? 'text-white h-[23px]' : 'text-black h-[23px]'
          }`}
        >
          Cart
        </button>

        <button
          className={`font-primary text-[16px] font-normal leading-[100%] tracking-[-0.02em] ${
            isDarkBackground
              ? 'bg-white text-black px-6 py-2 rounded h-[32px] hover:bg-red-600 hover:text-white transition-colors duration-300'
              : 'bg-black text-white px-6 py-2 rounded h-[32px] hover:bg-red-600 hover:text-white transition-colors duration-300'
          }`}
        >
          Buy
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
