
import React, { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

// Mock data for portfolio projects
const projects = [
  {
    id: 'elegant-garden-pergola',
    title: 'Elegant Garden Pergola',
    category: 'Pergolas',
    imageUrl: 'https://images.unsplash.com/photo-1598902590388-afda95c3f850?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'cedar-deck-with-railing',
    title: 'Cedar Deck with Custom Railing',
    category: 'Decking',
    imageUrl: 'https://images.unsplash.com/photo-1575403071235-5a8b59af4477?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'japanese-garden-bridge',
    title: 'Japanese Garden Bridge',
    category: 'Garden Features',
    imageUrl: 'https://images.unsplash.com/photo-1611029430255-e70dfbe20738?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'backyard-gazebo',
    title: 'Backyard Gazebo Retreat',
    category: 'Gazebos',
    imageUrl: 'https://images.unsplash.com/photo-1568750478564-e646311d8079?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'redwood-garden-bench',
    title: 'Redwood Garden Bench',
    category: 'Garden Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1592250819999-c6aa104adb4a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'rustic-arbor',
    title: 'Rustic Garden Arbor',
    category: 'Arbors',
    imageUrl: 'https://images.unsplash.com/photo-1558718970-17a39cfc9a48?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'modern-planter-boxes',
    title: 'Modern Wooden Planter Boxes',
    category: 'Planters',
    imageUrl: 'https://images.unsplash.com/photo-1581173731795-ee0e783f5744?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'privacy-screen',
    title: 'Garden Privacy Screen',
    category: 'Screens',
    imageUrl: 'https://images.unsplash.com/photo-1494511516029-9eea1ecf6c88?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'elevated-garden-beds',
    title: 'Elevated Garden Beds',
    category: 'Garden Beds',
    imageUrl: 'https://images.unsplash.com/photo-1595810489839-dcf8cbbd717e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  }
];

// All available categories
const allCategories = ['All', ...new Set(projects.map(project => project.category))];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Our Portfolio"
        subtitle="Explore our collection of handcrafted wooden garden structures and features."
        imageUrl="https://images.unsplash.com/photo-1523575318206-33e1cca70fe4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1800&h=900"
        overlay={true}
      />
      
      {/* Portfolio Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Work" 
            subtitle="Browse through our completed projects and discover the craftsmanship that goes into each wooden structure we create."
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allCategories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-wood hover:bg-wood-dark" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-24 bg-earth-light/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Project Process" 
            subtitle="From initial consultation to final installation, our process ensures a seamless experience and exceptional results."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessCard 
              step="01"
              title="Consultation"
              description="We meet to discuss your vision, preferences, and requirements for your garden structure."
            />
            <ProcessCard 
              step="02"
              title="Design"
              description="Our designers create detailed plans and renderings for your approval."
            />
            <ProcessCard 
              step="03"
              title="Crafting"
              description="Our skilled craftsmen build your structure using premium materials and traditional techniques."
            />
            <ProcessCard 
              step="04"
              title="Installation"
              description="We carefully install your finished piece in your garden with minimal disruption."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
}

const ProcessCard = ({ step, title, description }: ProcessCardProps) => (
  <div className="relative p-8 bg-white rounded-lg shadow-md hover-grow transition-all">
    <div className="absolute -top-5 left-8 w-10 h-10 flex items-center justify-center bg-wood text-white font-bold rounded-full">
      {step}
    </div>
    <h3 className="text-xl font-serif font-semibold mt-4 mb-4">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Portfolio;
