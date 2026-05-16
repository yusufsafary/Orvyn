import { useEffect, useState, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    setIsVisible(true);
    
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable');
        
      setIsHovering(isClickable);
    };
    
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    
    let animationFrameId: number;
    
    const render = () => {
      // Lerp for the ring
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    animationFrameId = requestAnimationFrame(render);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 w-[34px] h-[34px] border border-accent rounded-full pointer-events-none z-[100] transition-all duration-300 ease-out -ml-[17px] -mt-[17px] mix-blend-screen ${isHovering ? 'scale-[1.5] bg-accent/10' : 'scale-100'}`}
      />
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] bg-accent rounded-full pointer-events-none z-[100] -ml-[3.5px] -mt-[3.5px] mix-blend-screen"
      />
    </>
  );
}
