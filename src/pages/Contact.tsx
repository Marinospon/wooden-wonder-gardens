
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Map from '@/components/Map';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast({
      title: "Μήνυμα Εστάλη",
      description: "Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σας σύντομα.",
      duration: 5000,
    });
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Επικοινωνία"
        subtitle="Επικοινωνήστε μαζί μας για να συζητήσουμε το έργο κήπου σας."
        imageUrl="/lovable-uploads/673639f2-44a8-4359-8d6a-b12580883e41.png"
      />
      
      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Επικοινωνήστε Μαζί Μας" 
                subtitle="Συμπληρώστε τη φόρμα παρακάτω και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό."
                align="left"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Όνομα *
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Το όνομά σας" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Επώνυμο *
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Το επώνυμό σας" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Η διεύθυνση email σας" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Τηλέφωνο
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Το τηλέφωνό σας" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Θέμα *
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Σχετικά με τι είναι το μήνυμά σας;" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Μήνυμα *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Περιγράψτε το έργο ή την ερώτησή σας" 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-wood hover:bg-wood-dark text-white">
                  Αποστολή Μηνύματος
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <SectionTitle 
                title="Πληροφορίες Επικοινωνίας" 
                subtitle="Επισκεφθείτε μας, καλέστε μας ή στείλτε μας email. Είμαστε εδώ για να σας βοηθήσουμε με τις ξύλινες κατασκευές κήπου σας."
                align="left"
              />
              
              <div className="space-y-8 mt-10">
                <ContactInfo 
                  icon={<MapPin size={24} className="text-wood" />}
                  title="Η Διεύθυνσή μας"
                  details={[
                    "ΜΠΡΟΥΜΑΣ ΑΝΔΡΕΑΣ",
                    "ΛΕΩΦ. ΦΛΕΜΙΝΓΚ 54",
                    "ΡΑΦΗΝΑ"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Phone size={24} className="text-wood" />}
                  title="Τηλέφωνο"
                  details={[
                    "Τηλ: 22940 78371",
                    "Κιν: 697-774-2882"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Mail size={24} className="text-wood" />}
                  title="Email"
                  details={[
                    "info@wooden-creations.gr"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Clock size={24} className="text-wood" />}
                  title="Ώρες Λειτουργίας"
                  details={[
                    "Δευτέρα - Παρασκευή: 9πμ - 7μμ",
                    "Σάββατο: 9πμ - 3μμ",
                    "Κυριακή: Κλειστά"
                  ]}
                />
              </div>
              
              {/* Map */}
              <div className="mt-12">
                <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Reviews Section */}
      <section className="py-24 bg-earth-light/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Αξιολογήσεις Πελατών" 
            subtitle="Διαβάστε τι λένε οι πελάτες μας για τις ξύλινες κατασκευές και την εξυπηρέτησή μας."
          />
          
          <div className="mt-12">
            <CustomerReviews />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-earth-light/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Συχνές Ερωτήσεις" 
            subtitle="Βρείτε απαντήσεις σε μερικές από τις πιο συχνές ερωτήσεις σχετικά με τις ξύλινες κατασκευές κήπου μας."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <FaqItem 
              question="Πόσο χρόνο χρειάζεται συνήθως ένα έργο;"
              answer="Ο χρόνος ολοκλήρωσης του έργου εξαρτάται από την πολυπλοκότητα και το μέγεθος. Μία τυπική πέργκολα χρειάζεται συνήθως 3-4 εβδομάδες από την έγκριση του σχεδίου μέχρι την εγκατάσταση. Τα μεγαλύτερα ή πιο εξειδικευμένα έργα μπορεί να χρειαστούν 6-8 εβδομάδες."
            />
            <FaqItem 
              question="Τι είδη ξύλου χρησιμοποιείτε;"
              answer="Χρησιμοποιούμε κυρίως κέδρο, ερυθρελάτη και εμποτισμένο πεύκο. Όλα τα ξύλα μας προέρχονται από υπεύθυνες πηγές και επιλέγονται για την ανθεκτικότητα, την εμφάνιση και την καταλληλότητά τους για εξωτερικές κατασκευές κήπου."
            />
            <FaqItem 
              question="Προσφέρετε υπηρεσίες σχεδιασμού;"
              answer="Ναι, η ομάδα μας περιλαμβάνει έμπειρους σχεδιαστές που θα συνεργαστούν μαζί σας για να δημιουργήσουν εξατομικευμένες ξύλινες κατασκευές που συμπληρώνουν τον κήπο σας και καλύπτουν τις συγκεκριμένες ανάγκες σας."
            />
            <FaqItem 
              question="Ποια είναι η εγγύηση για τις κατασκευές σας;"
              answer="Προσφέρουμε 5ετή εγγύηση για την εργασία και τη δομική ακεραιότητα για όλες τις κατασκευές του κήπου μας. Συγκεκριμένα υλικά ξύλου μπορεί να έχουν πρόσθετες εγγυήσεις κατασκευαστή."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo = ({ icon, title, details }: ContactInfoProps) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-serif font-semibold mb-2">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-muted-foreground">{detail}</p>
        ))}
      </div>
    </div>
  </div>
);

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-serif font-semibold mb-3">{question}</h3>
    <p className="text-muted-foreground">{answer}</p>
  </div>
);

export default Contact;
