'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          ZULU FASHION
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          style={{ cursor: 'pointer', position: 'relative' }}
          onClick={handleClick}
        />

        {showPopup && (
          <div
            style={{
              position: 'absolute',
              top: '50px',
              right: '0',
              padding: '10px 20px',
              background: 'linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b)',
              border: '1px solid #333',
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
              zIndex: '100',
              display: 'flex',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <span>Experience 2</span>
            <button
              type="button" // Explicitly setting the button type
              onClick={closePopup}
              style={{
                marginLeft: '10px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
