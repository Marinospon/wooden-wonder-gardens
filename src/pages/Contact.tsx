
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast({
      title: "Message Sent",
      description: "Thank you! We'll get back to you soon.",
      duration: 5000,
    });
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your garden project."
        imageUrl="https://images.unsplash.com/photo-1621640119807-ca4efb503014?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1800&h=900"
      />
      
      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                align="left"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Your phone number" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What is your message about?" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project or inquiry" 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-wood hover:bg-wood-dark text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <SectionTitle 
                title="Contact Information" 
                subtitle="Visit us, call us, or send us an email. We're here to help with your wooden garden structure needs."
                align="left"
              />
              
              <div className="space-y-8 mt-10">
                <ContactInfo 
                  icon={<MapPin size={24} className="text-wood" />}
                  title="Our Location"
                  details={[
                    "123 Garden Lane",
                    "Woodville, WV 54321",
                    "United States"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Phone size={24} className="text-wood" />}
                  title="Phone Number"
                  details={[
                    "(555) 123-4567",
                    "(555) 987-6543"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Mail size={24} className="text-wood" />}
                  title="Email Address"
                  details={[
                    "info@woodenwondergardens.com",
                    "sales@woodenwondergardens.com"
                  ]}
                />
                
                <ContactInfo 
                  icon={<Clock size={24} className="text-wood" />}
                  title="Business Hours"
                  details={[
                    "Monday - Friday: 8am - 6pm",
                    "Saturday: 9am - 4pm",
                    "Sunday: Closed"
                  ]}
                />
              </div>
              
              {/* Map */}
              <div className="mt-12">
                <div className="w-full h-80 bg-muted rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000&h=400"
                    alt="Map location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-earth-light/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to some of the most common questions about our wooden garden structures."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <FaqItem 
              question="How long does a typical project take?"
              answer="Project timelines vary depending on complexity and size. A standard pergola typically takes 3-4 weeks from design approval to installation. Larger or more custom projects may take 6-8 weeks."
            />
            <FaqItem 
              question="What types of wood do you use?"
              answer="We primarily work with cedar, redwood, and pressure-treated pine. All our wood is responsibly sourced and chosen for its durability, appearance, and suitability for outdoor garden structures."
            />
            <FaqItem 
              question="Do you offer design services?"
              answer="Yes, our team includes experienced designers who will work with you to create custom wooden structures that complement your garden and meet your specific needs."
            />
            <FaqItem 
              question="What is the warranty on your structures?"
              answer="We offer a 5-year warranty on workmanship and structural integrity for all our garden structures. Specific wood materials may have additional manufacturer warranties."
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
