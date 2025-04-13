
import React, { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';

// Updated categories with better images
const categories = [
  {
    id: 'parking',
    title: 'PARKING',
    count: 10,
    imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png'
  },
  {
    id: 'zardinieres',
    title: 'ΖΑΡΝΤΙΝΙΕΡΕΣ',
    count: 27,
    imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png'
  },
  {
    id: 'flower-pots',
    title: 'ΚΑΦΑΣΩΤΑ',
    count: 26,
    imageUrl: '/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png'
  },
  {
    id: 'wooden-decks',
    title: 'ΞΥΛΙΝΑ ΠΑΤΩΜΑΤΑ',
    count: 15,
    imageUrl: '/lovable-uploads/85c0b3c5-da97-4b4d-93f9-22dc5e26c23f.png'
  },
  {
    id: 'fences',
    title: 'ΠΕΡΙΦΡΑΞΕΙΣ',
    count: 21,
    imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png'
  },
  {
    id: 'dog-houses',
    title: 'ΣΠΙΤΑΚΙΑ ΣΚΥΛΩΝ',
    count: 27,
    imageUrl: '/lovable-uploads/3ec28629-0c84-4601-80c5-8fa8270069e5.png'
  },
  {
    id: 'garden-houses',
    title: 'ΣΠΙΤΑΚΙΑ ΚΗΠΟΥ',
    count: 14,
    imageUrl: '/lovable-uploads/3ec28629-0c84-4601-80c5-8fa8270069e5.png'
  },
  {
    id: 'children-houses',
    title: 'ΠΑΙΔΙΚΑ ΣΠΙΤΑΚΙΑ',
    count: 21,
    imageUrl: '/lovable-uploads/3ec28629-0c84-4601-80c5-8fa8270069e5.png'
  },
  {
    id: 'seating',
    title: 'ΚΑΘΙΣΤΙΚΑ',
    count: 16,
    imageUrl: '/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png'
  },
  {
    id: 'kiosks',
    title: 'ΚΙΟΣΚΙΑ',
    count: 5,
    imageUrl: '/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png'
  },
  {
    id: 'doors',
    title: 'ΠΟΡΤΕΣ',
    count: 13,
    imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png'
  },
  {
    id: 'roofing',
    title: 'ΣΚΕΠΑΣΗ',
    count: 21,
    imageUrl: '/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png'
  },
  {
    id: 'pergolas',
    title: 'ΠΕΡΓΚΟΛΕΣ',
    count: 30,
    imageUrl: '/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png'
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Κατηγορίες Έργων"
        subtitle="Εξερευνήστε τη συλλογή μας από χειροποίητες ξύλινες κατασκευές και στοιχεία κήπου."
        imageUrl="/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png"
        overlay={true}
      />
      
      {/* Portfolio Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Έργα ανά Κατηγορία" 
            subtitle="Περιηγηθείτε στις κατηγορίες των έργων μας και ανακαλύψτε την τεχνογνωσία που συνοδεύει κάθε ξύλινη κατασκευή που δημιουργούμε."
          />
          
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.title}
                count={category.count}
                imageUrl={category.imageUrl}
              />
            ))}
          </div>
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
