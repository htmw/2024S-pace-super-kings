import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the route changes
      }, [location]); // Only re-run when the location changes
    
      return null; // No rendering, only side effects
    };

export default ScrollToTop;