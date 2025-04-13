
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CategoryCardProps {
  id: string;
  title: string;
  count: number;
  imageUrl: string;
  className?: string;
}

const CategoryCard = ({ id, title, count, imageUrl, className }: CategoryCardProps) => {
  return (
    <Link 
      to={`/portfolio/${id}`} 
      className={cn(
        "group block relative overflow-hidden rounded-lg shadow-md hover-grow transition-all",
        className
      )}
    >
      <div className="aspect-w-4 aspect-h-3 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-white group-hover:text-wood-light transition-colors">
            {title}
          </h3>
          <Badge variant="secondary" className="bg-wood text-white">
            {count}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
