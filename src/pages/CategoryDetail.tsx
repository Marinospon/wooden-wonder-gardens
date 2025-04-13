
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

// Placeholder projects for each category
const projectsByCategory = {
  'parking': [
    { id: 'parking-1', title: 'Ξύλινο Πάρκινγκ Αυτοκινήτου', category: 'PARKING', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
    { id: 'parking-2', title: 'Διπλό Πάρκινγκ', category: 'PARKING', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'pergolas': [
    { id: 'pergola-1', title: 'Πέργκολα Κήπου', category: 'ΠΕΡΓΚΟΛΕΣ', imageUrl: '/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png' },
    { id: 'pergola-2', title: 'Πέργκολα Βεράντας', category: 'ΠΕΡΓΚΟΛΕΣ', imageUrl: '/lovable-uploads/7141aad8-fdef-4110-954c-67a72923c424.png' },
  ],
  'zardinieres': [
    { id: 'zardinieres-1', title: 'Ξύλινη Ζαρντινιέρα', category: 'ΖΑΡΝΤΙΝΙΕΡΕΣ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'flower-pots': [
    { id: 'flower-pots-1', title: 'Ξύλινα Καφασωτά', category: 'ΚΑΦΑΣΩΤΑ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'wooden-decks': [
    { id: 'wooden-decks-1', title: 'Ξύλινο Δάπεδο', category: 'ΞΥΛΙΝΑ ΠΑΤΩΜΑΤΑ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'fences': [
    { id: 'fences-1', title: 'Ξύλινη Περίφραξη', category: 'ΠΕΡΙΦΡΑΞΕΙΣ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'dog-houses': [
    { id: 'dog-houses-1', title: 'Σπιτάκι Σκύλου', category: 'ΣΠΙΤΑΚΙΑ ΣΚΥΛΩΝ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'garden-houses': [
    { id: 'garden-houses-1', title: 'Αποθηκάκι Κήπου', category: 'ΣΠΙΤΑΚΙΑ ΚΗΠΟΥ', imageUrl: '/lovable-uploads/dcc4bd63-f238-47a9-af55-9b7af3032a3f.png' },
  ],
  'children-houses': [
    { id: 'children-houses-1', title: 'Παιδικό Σπιτάκι', category: 'ΠΑΙΔΙΚΑ ΣΠΙΤΑΚΙΑ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'seating': [
    { id: 'seating-1', title: 'Ξύλινο Καθιστικό', category: 'ΚΑΘΙΣΤΙΚΑ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'kiosks': [
    { id: 'kiosks-1', title: 'Ξύλινο Κιόσκι', category: 'ΚΙΟΣΚΙΑ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'doors': [
    { id: 'doors-1', title: 'Ξύλινη Πόρτα', category: 'ΠΟΡΤΕΣ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
  'roofing': [
    { id: 'roofing-1', title: 'Ξύλινη Σκεπή', category: 'ΣΚΕΠΑΣΗ', imageUrl: '/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png' },
  ],
};

// Category title mapping
const categoryTitles = {
  'parking': 'PARKING',
  'pergolas': 'ΠΕΡΓΚΟΛΕΣ',
  'zardinieres': 'ΖΑΡΝΤΙΝΙΕΡΕΣ',
  'flower-pots': 'ΚΑΦΑΣΩΤΑ',
  'wooden-decks': 'ΞΥΛΙΝΑ ΠΑΤΩΜΑΤΑ',
  'fences': 'ΠΕΡΙΦΡΑΞΕΙΣ',
  'dog-houses': 'ΣΠΙΤΑΚΙΑ ΣΚΥΛΩΝ',
  'garden-houses': 'ΣΠΙΤΑΚΙΑ ΚΗΠΟΥ',
  'children-houses': 'ΠΑΙΔΙΚΑ ΣΠΙΤΑΚΙΑ',
  'seating': 'ΚΑΘΙΣΤΙΚΑ',
  'kiosks': 'ΚΙΟΣΚΙΑ',
  'doors': 'ΠΟΡΤΕΣ', 
  'roofing': 'ΣΚΕΠΑΣΗ',
};

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const projects = categoryId ? (projectsByCategory[categoryId as keyof typeof projectsByCategory] || []) : [];
  const categoryTitle = categoryId ? (categoryTitles[categoryId as keyof typeof categoryTitles] || 'Κατηγορία') : 'Κατηγορία';

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title={categoryTitle}
        subtitle="Εξερευνήστε τις ξύλινες κατασκευές μας σε αυτή την κατηγορία"
        imageUrl="/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png"
        overlay={true}
      />
      
      {/* Portfolio Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/portfolio" className="inline-flex items-center text-wood hover:text-wood-dark transition-colors">
              <ChevronLeft className="mr-1" size={16} />
              Επιστροφή στις κατηγορίες
            </Link>
          </div>
          
          <SectionTitle 
            title={`Έργα - ${categoryTitle}`} 
            subtitle="Ανακαλύψτε τις χειροποίητες ξύλινες κατασκευές μας σε αυτή την κατηγορία"
          />
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
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
          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Δεν βρέθηκαν έργα σε αυτή την κατηγορία αυτή τη στιγμή.</p>
              <Link to="/portfolio">
                <Button className="mt-6 bg-wood hover:bg-wood-dark">
                  Προβολή όλων των κατηγοριών
                </Button>
              </Link>
            </div>
          )}
          
          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4">Ενδιαφέρεστε για μια παρόμοια κατασκευή;</h3>
            <p className="text-muted-foreground mb-6">Επικοινωνήστε μαζί μας για μια εξατομικευμένη προσφορά για το έργο σας.</p>
            <Link to="/contact">
              <Button className="bg-wood hover:bg-wood-dark">
                Επικοινωνήστε μαζί μας
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;
