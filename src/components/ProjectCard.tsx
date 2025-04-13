
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  className?: string;
}

const ProjectCard = ({ id, title, category, imageUrl, className }: ProjectCardProps) => {
  return (
    <Link to={`/portfolio/${id}`} className={cn("group block relative overflow-hidden rounded-lg shadow-md hover-grow", className)}>
      <div className="aspect-w-4 aspect-h-3 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-wood-light text-sm font-medium mb-2 block">
          {category}
        </span>
        <h3 className="text-xl md:text-2xl font-serif font-semibold text-white group-hover:text-wood-light transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
