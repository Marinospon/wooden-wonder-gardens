import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Leaf, Hammer, Users } from 'lucide-react';

const Index = () => {
  // Sample featured projects
  const featuredProjects = [
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Crafting Wooden Wonder in Your Garden"
        subtitle="Beautiful, bespoke wooden structures and garden features handcrafted with passion and precision."
        imageUrl="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1800&h=900"
        ctaText="Explore Our Creations"
      />
      
      {/* About Section */}
      <section className="py-24 bg-earth-light/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Transforming Gardens with Wooden Craftsmanship</h2>
              <p className="text-lg mb-6">
                Since 1995, Wooden Wonder Gardens has been creating stunning wooden garden structures and features that enhance outdoor spaces with natural beauty and functionality.
              </p>
              <p className="text-lg mb-8">
                From elegant pergolas to custom garden bridges, our team of skilled craftsmen work with premium wood to design and build unique pieces that complement your garden's aesthetic.
              </p>
              <Button asChild className="bg-wood hover:bg-wood-dark text-white">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600240644455-fd509e8f2530?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Wooden garden structure" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-garden p-4 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-white text-center font-serif font-bold">
                  <span className="block text-3xl">25+</span>
                  <span className="text-sm">Years of Excellence</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="We offer a range of wooden garden structures and features tailored to your unique needs and garden style."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Leaf className="h-10 w-10 text-garden" />}
              title="Wooden Pergolas" 
              description="Custom designed pergolas in various styles to create the perfect outdoor living space."
            />
            <ServiceCard 
              icon={<Hammer className="h-10 w-10 text-garden" />}
              title="Garden Structures" 
              description="Gazebos, arbors, trellises, and more – expertly crafted to enhance your garden."
            />
            <ServiceCard 
              icon={<Award className="h-10 w-10 text-garden" />}
              title="Custom Features" 
              description="Unique wooden elements including bridges, planters, and decorative features."
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="Browse through some of our most beloved creations that have transformed gardens into elegant outdoor retreats."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-wood hover:bg-wood-dark text-white">
              <Link to="/portfolio">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-garden-dark text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What Our Clients Say" 
            subtitle="The satisfaction of our clients is our greatest reward. Here's what some of them have to say about our work."
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The pergola they built has completely transformed our backyard into a beautiful outdoor living space. Exceptional craftsmanship!"
              author="Emily Johnson"
              position="Homeowner"
            />
            <TestimonialCard 
              quote="Their attention to detail and quality of work is outstanding. The Japanese garden bridge they created is the centerpiece of our garden."
              author="Michael Chen"
              position="Landscape Designer"
            />
            <TestimonialCard 
              quote="Professional, creative, and a pleasure to work with. They listened to our ideas and created exactly what we envisioned."
              author="Sarah Williams"
              position="Property Developer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-earth-light/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Garden?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and get a free consultation with one of our expert craftsmen.
          </p>
          <Button asChild className="bg-wood hover:bg-wood-dark text-white py-6 px-8 text-lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover-grow transition-all">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-serif font-semibold mb-4">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}

const TestimonialCard = ({ quote, author, position }: TestimonialCardProps) => (
  <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
    <p className="text-lg italic mb-6">&ldquo;{quote}&rdquo;</p>
    <div>
      <h4 className="font-semibold text-wood-light">{author}</h4>
      <p className="text-sm text-white/70">{position}</p>
    </div>
  </div>
);

export default Index;
