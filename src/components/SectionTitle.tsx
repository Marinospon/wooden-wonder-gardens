
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn("mb-12", alignmentClasses[align], className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-serif font-bold mb-4 relative inline-block",
        align === 'center' && "after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-wood-dark after:transform after:translate-x-[-50%]",
        align === 'left' && "after:absolute after:bottom-[-10px] after:left-0 after:w-20 after:h-1 after:bg-wood-dark",
        align === 'right' && "after:absolute after:bottom-[-10px] after:right-0 after:w-20 after:h-1 after:bg-wood-dark",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-6 text-lg text-muted-foreground max-w-2xl mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
