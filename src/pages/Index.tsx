
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Ξύλινες Δημιουργίες για τον Κήπο και τη Βεράντα σας"
        subtitle="Όμορφες, εξατομικευμένες ξύλινες κατασκευές και στοιχεία κήπου χειροποίητα με πάθος και ακρίβεια."
        imageUrl="/garden-hero.jpg"
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
                Πέργκολες και κιόσκια που προσφέρουν σκίαση αλλά και φως, σημείο επικοινωνίας και χαλάρωσης. Περιφράξεις και διαχωριστικά, πάρκινγκ και ξύλινα πατώματα απόλυτα προσαρμοσμένα στο χώρο και την αισθητική σας.
              </p>
              <Button asChild className="bg-wood hover:bg-wood-dark text-white">
                <Link to="/about">Μάθετε Περισσότερα <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/wood-texture.jpg" 
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
            />
            <ServiceCard 
              icon={<Hammer className="h-10 w-10 text-garden" />}
              title="Κατασκευές Κήπου" 
              description="Κιόσκια, διακοσμητικά, πέργκολες και περισσότερα – σχεδιασμένα για να αναδείξουν τον κήπο σας."
            />
            <ServiceCard 
              icon={<Award className="h-10 w-10 text-garden" />}
              title="Ειδικές Κατασκευές" 
              description="Μοναδικά ξύλινα στοιχεία συμπεριλαμβανομένων γεφυρών, ζαρντινιέρων και διακοσμητικών στοιχείων."
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

      {/* Testimonial Section */}
      <section className="py-24 bg-garden-dark text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Τι Λένε οι Πελάτες μας" 
            subtitle="Η ικανοποίηση των πελατών μας είναι η μεγαλύτερη ανταμοιβή μας. Δείτε τι λένε μερικοί από αυτούς για τη δουλειά μας."
            titleClassName="text-white"
            subtitleClassName="text-white/80"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Η πέργκολα που κατασκεύασαν έχει μετατρέψει εντελώς τον κήπο μας σε έναν όμορφο υπαίθριο χώρο διαβίωσης. Εξαιρετική τεχνογνωσία!"
              author="Μαρία Παπαδοπούλου"
              position="Ιδιοκτήτρια Κατοικίας"
            />
            <TestimonialCard 
              quote="Η προσοχή τους στη λεπτομέρεια και η ποιότητα εργασίας είναι εξαιρετική. Το γεφυράκι κήπου που δημιούργησαν είναι το επίκεντρο του κήπου μας."
              author="Γιώργος Αντωνίου"
              position="Αρχιτέκτονας Τοπίου"
            />
            <TestimonialCard 
              quote="Επαγγελματίες, δημιουργικοί και ευχάριστοι στη συνεργασία. Άκουσαν τις ιδέες μας και δημιούργησαν ακριβώς αυτό που οραματιστήκαμε."
              author="Ελένη Δημητρίου"
              position="Κατασκευαστής Ακινήτων"
            />
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
