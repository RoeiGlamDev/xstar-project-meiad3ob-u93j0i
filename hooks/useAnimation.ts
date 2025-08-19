import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the GlamCS cosmetics website.
 * This hook helps create elegant 3D animations and effects to enhance user experience.
 * 
 * @returns {Object} - An object containing animation-related functions and states.
 */
export interface GlamCSAnimation {
  animateIn: () => void;
  animateOut: () => void;
  animationState: boolean;
}

export const useAnimation = (): GlamCSAnimation => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    if (elementRef.current) {
      // Adding animation on mount
      elementRef.current.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      setIsAnimated(true);
    }
  }, []);

  const animateIn = () => {
    if (elementRef.current) {
      elementRef.current.style.transform = 'translateY(0)';
      elementRef.current.style.opacity = '1';
    }
  };

  const animateOut = () => {
    if (elementRef.current) {
      elementRef.current.style.transform = 'translateY(-20px)';
      elementRef.current.style.opacity = '0';
    }
  };

  return {
    animateIn,
    animateOut,
    animationState: isAnimated,
  };
};

export default useAnimation;