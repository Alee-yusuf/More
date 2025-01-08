// theme.js

const theme = {
    colors: {
      primary: '#0A0F1C',      // Deep navy blue
      secondary: '#141E33',    // Darker blue
      accent: '#64FFDA',       // Cyan/mint
      text: {
        primary: '#E6F1FF',    // Light blue-white
        secondary: '#8892B0',  // Muted blue-gray
      },
      background: {
        dark: '#060B14',       // Darkest blue
        gradient: 'linear-gradient(180deg, #0A0F1C 0%, #060B14 100%)',
      }
    },
    animations: {
      transition: {
        default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      glow: {
        accent: '0 0 20px rgba(100, 255, 218, 0.3)',
      }
    }
  };
  
  const animationVariants = {
    fadeIn: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }
    },
    slideIn: {
      hidden: { x: -20, opacity: 0 },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.6 }
      }
    },
    buttonHover: {
      hover: { scale: 1.05 },
      tap: { scale: 0.95 }
    }
  };
  
  export { theme, animationVariants };