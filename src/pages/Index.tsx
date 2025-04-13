
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Leaf, Hammer, Users, Home } from 'lucide-react';
import CustomerReviews from '@/components/CustomerReviews';

const Index = () => {
  // Updated featured projects with better images
  const featuredProjects = [
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Ξύλινες Δημιουργίες για τον Κήπο και τη Βεράντα σας"
        subtitle="Όμορφες, εξατομικευμένες ξύλινες κατασκευές και στοιχεία κήπου χειροποίητα με πάθος και ακρίβεια."
        imageUrl="/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png"
        ctaText="Δείτε τις Δημιουργίες μας"
      />
      
      {/* About Section */}
      <section className="py-24 bg-earth-light/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Μεταμορφώνουμε Κήπους με Ξυλουργική Τέχνη</h2>
              <p className="text-lg mb-6">
                Σας περιμένουμε στο χώρο της έκθεσης μας όταν θελήσετε να δημιουργήσετε στο κήπο ή στη βεράντα σας, μία σας έμπνευση... 
              </p>
              <p className="text-lg mb-8">
                Πέργκολες και κιόσκια που προσφέρουν σκίαση αλλά και φως, σημείο επικοινωνίας και χαλάρωσης. Περιφράξεις και διαχωριστικά, πάρκινγκ και ξύλινα πατώματα απόλυτα προσαρμοσμένα στο χώρο και την αισθητική σας. Ξύλινες ζαρντινιέρες σε όποιες διαστάσεις θέλετε. Παιδικά σπιτάκια και δεντρόσπιτα για να στεγάσουν τα παιδιά σας... τα πρώτα τους όνειρα! Αποθηκάκια κήπου, σπιτάκια σκύλου, έπιπλα - καθιστικά, γεφυράκια και κάθε λογής διακοσμητικό στοιχείο πάντα φτιαγμένο από ξύλο και πάντα φτιαγμένο για εσάς και μόνο.
              </p>
              <Button asChild className="bg-wood hover:bg-wood-dark text-white">
                <Link to="/about">Μάθετε Περισσότερα <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png" 
                  alt="Ξύλινη κατασκευή κήπου" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-garden p-4 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-white text-center font-serif font-bold">
                  <span className="block text-3xl">25+</span>
                  <span className="text-sm">Χρόνια Εμπειρίας</span>
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
            title="Οι Υπηρεσίες μας" 
            subtitle="Προσφέρουμε μια σειρά από ξύλινες κατασκευές κήπου προσαρμοσμένες στις μοναδικές σας ανάγκες και το στυλ του κήπου σας."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Leaf className="h-10 w-10 text-garden" />}
              title="Ξύλινες Πέργκολες" 
              description="Πέργκολες προσαρμοσμένες σε διάφορα στυλ για να δημιουργήσουν τον τέλειο εξωτερικό χώρο διαβίωσης."
              imageUrl="/lovable-uploads/19552736-2f7d-4f83-a4f5-66dd47fe7a7a.png"
            />
            <ServiceCard 
              icon={<Hammer className="h-10 w-10 text-garden" />}
              title="Κατασκευές Κήπου" 
              description="Κιόσκια, διακοσμητικά, πέργκολες και περισσότερα – σχεδιασμένα για να αναδείξουν τον κήπο σας."
              imageUrl="/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png"
            />
            <ServiceCard 
              icon={<Award className="h-10 w-10 text-garden" />}
              title="Ειδικές Κατασκευές" 
              description="Μοναδικά ξύλινα στοιχεία συμπεριλαμβανομένων γεφυρών, ζαρντινιέρων και διακοσμητικών στοιχείων."
              imageUrl="/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png"
            />
            <ServiceCard 
              icon={<Home className="h-10 w-10 text-garden" />}
              title="Παιδικά Σπιτάκια" 
              description="Ξύλινα σπιτάκια και δεντρόσπιτα για να στεγάσουν τα πρώτα όνειρα των παιδιών σας."
              imageUrl="/lovable-uploads/3ec28629-0c84-4601-80c5-8fa8270069e5.png"
            />
            <ServiceCard 
              icon={<Users className="h-10 w-10 text-garden" />}
              title="Έπιπλα Κήπου" 
              description="Καθιστικά, τραπέζια, παγκάκια και άλλα έπιπλα κήπου προσαρμοσμένα στις ανάγκες σας."
              imageUrl="/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png"
            />
            <ServiceCard 
              icon={<Hammer className="h-10 w-10 text-garden" />}
              title="Ξύλινα Δάπεδα" 
              description="Δάπεδα εξωτερικού χώρου υψηλής ποιότητας και αντοχής για κήπους, βεράντες και πισίνες."
              imageUrl="/lovable-uploads/85c0b3c5-da97-4b4d-93f9-22dc5e26c23f.png"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-wood-light/10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Έργα μας" 
            subtitle="Περιηγηθείτε σε ορισμένες από τις πιο αγαπημένες μας δημιουργίες που έχουν μετατρέψει κήπους σε κομψές εξωτερικές αποδράσεις."
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
              <Link to="/portfolio">Δείτε Όλα τα Έργα <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-garden-dark text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Τι Λένε οι Πελάτες μας" 
            subtitle="Η ικανοποίηση των πελατών μας είναι η μεγαλύτερη ανταμοιβή μας. Δείτε τι λένε μερικοί από αυτούς για τη δουλειά μας."
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          
          <div className="mt-12">
            <CustomerReviews />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-earth-light/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Έτοιμοι να Μεταμορφώσετε τον Κήπο σας;</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε το έργο σας και να λάβετε δωρεάν συμβουλευτική από έναν από τους έμπειρους τεχνίτες μας.
          </p>
          <p className="text-xl font-serif italic mb-8">"Η επιθυμία σας... δημιουργία μας..!!! "</p>
          <Button asChild className="bg-wood hover:bg-wood-dark text-white py-6 px-8 text-lg">
            <Link to="/contact">Επικοινωνήστε Μαζί μας</Link>
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
  imageUrl: string;
}

const ServiceCard = ({ icon, title, description, imageUrl }: ServiceCardProps) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover-grow transition-all overflow-hidden">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-serif font-semibold mb-4">{title}</h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    <div className="h-48 w-full overflow-hidden rounded-md -mx-2 -mb-4 mt-4">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);

export default Index;
