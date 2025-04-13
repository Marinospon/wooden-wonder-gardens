
import React, { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

// Mock data for portfolio projects
const projects = [
  {
    id: 'elegant-garden-pergola',
    title: 'Πέργκολα Κήπου',
    category: 'Πέργκολες',
    imageUrl: 'https://images.unsplash.com/photo-1598902590388-afda95c3f850?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'cedar-deck-with-railing',
    title: 'Ξύλινο Δάπεδο με Κάγκελα',
    category: 'Δάπεδα',
    imageUrl: 'https://images.unsplash.com/photo-1575403071235-5a8b59af4477?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'japanese-garden-bridge',
    title: 'Γεφυράκι Κήπου',
    category: 'Διακοσμητικά Κήπου',
    imageUrl: 'https://images.unsplash.com/photo-1611029430255-e70dfbe20738?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'backyard-gazebo',
    title: 'Κιόσκι Κήπου',
    category: 'Κιόσκια',
    imageUrl: 'https://images.unsplash.com/photo-1568750478564-e646311d8079?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'redwood-garden-bench',
    title: 'Ξύλινο Παγκάκι Κήπου',
    category: 'Έπιπλα Κήπου',
    imageUrl: 'https://images.unsplash.com/photo-1592250819999-c6aa104adb4a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'rustic-arbor',
    title: 'Ρουστίκ Πέργκολα',
    category: 'Πέργκολες',
    imageUrl: 'https://images.unsplash.com/photo-1558718970-17a39cfc9a48?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'modern-planter-boxes',
    title: 'Μοντέρνες Ξύλινες Ζαρντινιέρες',
    category: 'Ζαρντινιέρες',
    imageUrl: 'https://images.unsplash.com/photo-1581173731795-ee0e783f5744?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'privacy-screen',
    title: 'Διαχωριστικό Κήπου',
    category: 'Διαχωριστικά',
    imageUrl: 'https://images.unsplash.com/photo-1494511516029-9eea1ecf6c88?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
  },
  {
    id: 'elevated-garden-beds',
    title: 'Υπερυψωμένα Παρτέρια',
    category: 'Παρτέρια',
    imageUrl: 'https://images.unsplash.com/photo-1595810489839-dcf8cbbd717e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=987&h=740'
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
