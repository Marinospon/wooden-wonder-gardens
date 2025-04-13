
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import { Heart, Shield, Clock, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="About Wooden Wonder Gardens"
        subtitle="Meet the team behind our beautiful wooden garden creations."
        imageUrl="https://images.unsplash.com/photo-1627910016961-ee31970b18f3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1800&h=900"
      />
      
      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                Wooden Wonder Gardens was founded in 1995 by Master Carpenter Thomas Wilson, who had a vision of creating beautiful, functional wooden structures that would enhance outdoor spaces and bring people closer to nature.
              </p>
              <p className="text-lg mb-6">
                What began as a small workshop has grown into a respected garden structure company, but our commitment to quality craftsmanship, sustainable practices, and customer satisfaction remains unchanged.
              </p>
              <p className="text-lg">
                Today, our team of skilled craftsmen continues Thomas's legacy, creating custom wooden pergolas, gazebos, bridges, and other garden features that transform ordinary gardens into extraordinary outdoor living spaces.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=800&h=600"
                  alt="Woodworking workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-wood p-6 rounded-lg shadow-lg">
                <p className="text-white text-center font-serif">
                  <span className="block text-3xl font-bold">Est. 1995</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-earth-light/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide our work and relationships with clients."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Heart className="h-12 w-12 text-garden" />}
              title="Passion" 
              description="We love what we do and pour our heart into every project."
            />
            <ValueCard 
              icon={<Shield className="h-12 w-12 text-garden" />}
              title="Quality" 
              description="We never compromise on materials or craftsmanship."
            />
            <ValueCard 
              icon={<Clock className="h-12 w-12 text-garden" />}
              title="Reliability" 
              description="We deliver on time and stand behind our work."
            />
            <ValueCard 
              icon={<Leaf className="h-12 w-12 text-garden" />}
              title="Sustainability" 
              description="We use responsibly sourced materials for eco-friendly structures."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The skilled craftsmen and designers behind our beautiful wooden creations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="James Wilson"
              position="Lead Designer"
              imageUrl="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=600"
              bio="With over 15 years of experience in garden design, James brings creativity and innovation to every project."
            />
            <TeamMember 
              name="Elena Martinez"
              position="Master Carpenter"
              imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=600"
              bio="Elena's exceptional woodworking skills and attention to detail ensure every structure is built to last."
            />
            <TeamMember 
              name="Michael Chen"
              position="Project Manager"
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=500&h=600"
              bio="Michael coordinates our projects with precision, ensuring smooth execution from design to installation."
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Journey" 
            subtitle="Key milestones in the Wooden Wonder Gardens story."
          />
          
          <div className="max-w-4xl mx-auto mt-16">
            <Timeline />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
  <div className="text-center p-8 bg-white rounded-lg shadow-md hover-grow transition-all">
    <div className="inline-flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-semibold mb-4">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
}

const TeamMember = ({ name, position, imageUrl, bio }: TeamMemberProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover-grow transition-all">
    <div className="h-64 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-serif font-semibold mb-1">{name}</h3>
      <p className="text-garden font-medium mb-4">{position}</p>
      <p className="text-muted-foreground">{bio}</p>
    </div>
  </div>
);

const Timeline = () => (
  <div className="relative">
    {/* Vertical line */}
    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-wood-light transform -translate-x-1/2"></div>
    
    {/* Timeline items */}
    <div className="space-y-16">
      <TimelineItem 
        year="1995"
        title="Foundation"
        description="Thomas Wilson establishes Wooden Wonder Gardens with a small workshop and a passion for wooden garden structures."
        align="right"
      />
      <TimelineItem 
        year="2002"
        title="Expansion"
        description="The company grows and moves to a larger workshop to accommodate increased demand for our custom pergolas and garden features."
        align="left"
      />
      <TimelineItem 
        year="2008"
        title="Sustainability Commitment"
        description="We formally adopt sustainable practices, working exclusively with responsibly sourced wood and eco-friendly finishes."
        align="right"
      />
      <TimelineItem 
        year="2015"
        title="Award-Winning Designs"
        description="Wooden Wonder Gardens wins its first regional landscaping award for innovative garden structure designs."
        align="left"
      />
      <TimelineItem 
        year="2023"
        title="Today"
        description="We continue to grow while maintaining our commitment to quality craftsmanship and customer satisfaction."
        align="right"
      />
    </div>
  </div>
);

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}

const TimelineItem = ({ year, title, description, align }: TimelineItemProps) => (
  <div className={`flex items-center ${align === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
    {/* Content */}
    <div className={`w-5/12 px-4 ${align === 'left' ? 'text-right' : 'text-left'}`}>
      <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
    
    {/* Center point */}
    <div className="w-2/12 flex justify-center">
      <div className="w-12 h-12 bg-wood rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
        {year}
      </div>
    </div>
    
    {/* Empty space on the other side */}
    <div className="w-5/12"></div>
  </div>
);

export default About;
