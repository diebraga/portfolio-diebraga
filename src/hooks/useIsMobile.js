import { useEffect, useState } from "react";

export const useIsMobile =()=>{
   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 800);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth < 800);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {isMobileView}
}