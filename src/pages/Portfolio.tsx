import React, { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

// Updated projects with the real images from the business
const projects = [
  {
    id: 'wooden-pergola',
    title: 'Πέργκολα Κήπου',
    category: 'Πέργκολες',
    imageUrl: '/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png'
  },
  {
    id: 'wooden-deck',
    title: 'Ξύλινο Δάπεδο',
    category: 'Δάπεδα',
    imageUrl: '/lovable-uploads/85c0b3c5-da97-4b4d-93f9-22dc5e26c23f.png'
  },
  {
    id: 'wooden-divider',
    title: 'Ξύλινα Διαχωριστικά',
    category: 'Διαχωριστικά',
    imageUrl: '/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png'
  },
  {
    id: 'terrace-pergola',
    title: 'Πέργκολα Βεράντας',
    category: 'Πέργκολες',
    imageUrl: '/lovable-uploads/7141aad8-fdef-4110-954c-67a72923c424.png'
  },
  {
    id: 'garden-house',
    title: 'Ξύλινο Σπιτάκι Κήπου',
    category: 'Κατασκευές Κήπου',
    imageUrl: '/lovable-uploads/dcc4bd63-f238-47a9-af55-9b7af3032a3f.png'
  },
  {
    id: 'garden-sheds',
    title: 'Αποθηκάκια Κήπου',
    category: 'Κατασκευές Κήπου',
    imageUrl: '/lovable-uploads/dcc4bd63-f238-47a9-af55-9b7af3032a3f.png'
  }
];

// All available categories
const allCategories = ['Όλα', ...new Set(projects.map(project => project.category))];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Όλα');
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'Όλα' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Το Χαρτοφυλάκιό μας"
        subtitle="Εξερευνήστε τη συλλογή μας από χειροποίητες ξύλινες κατασκευές και στοιχεία κήπου."
        imageUrl="/garden-hero.jpg"
        overlay={true}
      />
      
      {/* Portfolio Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Τα Έργα μας" 
            subtitle="Περιηγηθείτε στα ολοκληρωμένα έργα μας και ανακαλύψτε την τεχνογνωσία που συνοδεύει κάθε ξύλινη κατασκευή που δημιουργούμε."
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
              <p className="text-xl text-muted-foreground">Δεν βρέθηκαν έργα σε αυτή την κατηγορία.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-24 bg-earth-light/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Η Διαδικασία Έργου μας" 
            subtitle="Από την αρχική συμβουλευτική έως την τελική εγκατάσταση, η διαδικασία μας εξασφαλίζει μια ομαλή εμπειρία και εξαιρετικά αποτελέσματα."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessCard 
              step="01"
              title="Συμβουλευτική"
              description="Συναντιόμαστε για να συζητήσουμε το όραμά σας, τις προτιμήσεις και τις απαιτήσεις σας για την κατασκευή του κήπου σας."
            />
            <ProcessCard 
              step="02"
              title="Σχεδιασμός"
              description="Οι σχεδιαστές μας δημιουργούν λεπτομερή σχέδια και απεικονίσεις για την έγκρισή σας."
            />
            <ProcessCard 
              step="03"
              title="Κατασκευή"
              description="Οι έμπειροι τεχνίτες μας κατασκευάζουν τη δομή σας χρησιμοποιώντας κορυφαία υλικά και παραδοσιακές τεχνικές."
            />
            <ProcessCard 
              step="04"
              title="Εγκατάσταση"
              description="Εγκαθιστούμε προσεκτικά το τελικό σας κομμάτι στον κήπο σας με ελάχιστη διαταραχή."
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
