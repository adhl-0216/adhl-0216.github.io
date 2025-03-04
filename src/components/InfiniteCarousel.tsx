'use client';
import { useState, useEffect } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CarouselProps {
    items: React.ReactNode[];
}

export default function InfiniteCarousel({ items }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getCardStyle = (idx: number) => {
        const position = idx - currentIndex;
        let adjustedPosition = position;

        // Handle wrap-around
        if (position > items.length / 2) adjustedPosition = position - items.length;
        if (position < -items.length / 2) adjustedPosition = position + items.length;

        // Hide non-adjacent cards completely
        if (Math.abs(adjustedPosition) > 1) {
            return {
                transform: 'translateX(0) scale(0)',
                opacity: 0,
                zIndex: -1,
                visibility: 'hidden' as const,
                transition: isAnimating ? 'all 0.5s ease-out' : 'none',
            };
        }

        // Adjacent and current cards
        const x = adjustedPosition * (isMobile ? 100 : 25);
        const z = adjustedPosition === 0 ? 0 : -100;
        const scale = adjustedPosition === 0 ? 1 : 0.8;
        const opacity = adjustedPosition === 0 ? 1 : isMobile ? 0.5 : 0.4;
        const zIndex = adjustedPosition === 0 ? 2 : 1;

        return {
            transform: `translateX(${x}%) translateZ(${z}px) scale(${scale})`,
            opacity,
            zIndex,
            visibility: 'visible' as const,
            transition: isAnimating ? 'all 0.4s ease-out' : 'none',
        };
    };

    const navigate = (direction: 'prev' | 'next') => {
        if (isAnimating) return;

        setIsAnimating(true);
        setCurrentIndex(current => {
            if (direction === 'next') {
                return (current + 1) % items.length;
            }
            return current === 0 ? items.length - 1 : current - 1;
        });

        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="relative overflow-hidden">
            <button
                onClick={() => navigate('prev')}
                disabled={isAnimating}
                className="absolute flex justify-center align-center h-12 w-12 left-1 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-primary-800/80 p-4 rounded-full transition-opacity duration-300 hover:bg-primary-700/80 disabled:opacity-50"
            >
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            <button
                onClick={() => navigate('next')}
                disabled={isAnimating}
                className="absolute flex justify-center align-center h-12 w-12 right-1 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-primary-800/80 p-4 rounded-full transition-opacity duration-300 hover:bg-primary-700/80 disabled:opacity-50"
            >
                <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
            <div className="relative">
                <div className="w-full aspect-[3/4] md:aspect-[21/9]" />
                <div
                    className="absolute left-0 top-0 w-1/4 h-full z-10 cursor-pointer"
                    onClick={() => !isAnimating && navigate('prev')}
                />
                <div
                    className="absolute right-0 top-0 w-1/4 h-full z-10 cursor-pointer"
                    onClick={() => !isAnimating && navigate('next')}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="absolute w-[92%] md:w-50 transition-all flex justify-center items-center px-2 md:px-8"
                            style={getCardStyle(idx)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
