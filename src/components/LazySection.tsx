import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  minHeight?: string;
  className?: string;
  id?: string;
}

/**
 * LazySection defers mounting and rendering of heavy below-the-fold
 * components until the user scrolls within 350px of the section.
 * This drastically reduces initial JavaScript execution, DOM node count,
 * memory usage, and background animation overhead on mobile devices.
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  minHeight = '300px',
  className = '',
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, render immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '350px 0px', // Preload slightly before scrolling into view
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`content-visibility-auto ${className}`}
      style={{
        minHeight: isVisible ? 'auto' : minHeight,
        containIntrinsicSize: isVisible ? 'none' : `auto ${minHeight}`,
      }}
    >
      {isVisible ? children : <div style={{ height: minHeight }} aria-hidden="true" />}
    </div>
  );
};
