import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Function to handle smooth scroll to top
  const scrollToTop = () => {
    const scrollTop = window.pageYOffset;

    // Calculate distance to top
    const distance = scrollTop;
    const step = Math.PI / (500 / 15);

    // Calculate animation
    const cosParam = distance / 2;
    let scrollCount = 0;
    let scrollMargin;
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        scrollCount += 1;
        scrollMargin = cosParam - cosParam * Math.cos(scrollCount * step);
        window.scrollTo(0, scrollTop - scrollMargin);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      {showButton && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#000',
            color: '#ccc',
            transition: 'linear 0.1s',
            opacity: '0.7',
            '&:hover': {
                backgroundColor: '#ccc',
                color: '#000',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </>
  );
}

export default BackToTop;