
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
}

const HeroBanner = ({
  title,
  subtitle,
  imageUrl,
  ctaText = "View Our Work",
  ctaLink = "/portfolio",
  overlay = true,
}: HeroBannerProps) => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40 z-10" />
      )}
      
      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {subtitle}
          </p>
          {ctaText && (
            <Button asChild className="bg-wood hover:bg-wood-dark text-white py-6 px-8 text-lg rounded-md">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
