import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface SliderImage {
  src: string;
  alt: string;
  /** CSS object-position value, for images whose subject isn't centered. */
  focus?: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  aspectClassName?: string;
  roundedClassName?: string;
  /** Extra classes for the outer wrapper, e.g. a page-specific border. */
  className?: string;
  priority?: boolean;
  autoPlayMs?: number;
  label: string;
}

/**
 * Lightweight crossfade carousel reused across the homepage feature sections.
 * No external carousel library — mirrors the project's existing scroll/JS
 * footprint (see the testimonials slider) rather than adding a dependency.
 */
export default function ImageSlider({
  images,
  aspectClassName = 'aspect-[4/5]',
  roundedClassName = 'rounded-[80px]',
  className = '',
  priority = false,
  autoPlayMs = 6000,
  label,
}: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const hoverRef = useRef(false);

  const goTo = useCallback((i: number) => {
    setIndex(((i % count) + count) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1 || !autoPlayMs) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!hoverRef.current) setIndex((i) => (i + 1) % count);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [count, autoPlayMs]);

  if (count === 0) return null;

  return (
    <div
      className={`relative overflow-hidden ${roundedClassName} luxury-shadow group ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
    >
      <div className={`relative w-full ${aspectClassName}`}>
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-luxury group-hover:scale-105 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectPosition: img.focus ?? 'center', transitionProperty: 'opacity, transform', transitionDuration: '1200ms, 3000ms' }}
            alt={img.alt}
            referrerPolicy="no-referrer"
            loading={priority && i === 0 ? 'eager' : 'lazy'}
            fetchPriority={priority && i === 0 ? 'high' : undefined}
            decoding="async"
            aria-hidden={i === index ? undefined : true}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Prejšnja slika"
            onClick={(e) => { e.preventDefault(); goTo(index - 1); }}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/85 backdrop-blur-md luxury-shadow flex items-center justify-center text-brand-wood hover:bg-brand-gold hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Naslednja slika"
            onClick={(e) => { e.preventDefault(); goTo(index + 1); }}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/85 backdrop-blur-md luxury-shadow flex items-center justify-center text-brand-wood hover:bg-brand-gold hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Pojdi na sliko ${i + 1}`}
                aria-current={i === index}
                onClick={(e) => { e.preventDefault(); goTo(i); }}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-brand-gold' : 'w-1.5 bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
