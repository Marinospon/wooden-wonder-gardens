
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">ΜΠΡΟΥΜΑΣ ΑΝΔΡΕΑΣ</h3>
            <p className="text-earth-light mb-6">
              Δημιουργούμε όμορφες ξύλινες κατασκευές κήπου από το 1995.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-earth-light hover:text-white transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-earth-light hover:text-white transition-colors">
                  Έργα μας
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-earth-light hover:text-white transition-colors">
                  Σχετικά με εμάς
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-earth-light hover:text-white transition-colors">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Υπηρεσίες</h3>
            <ul className="space-y-3">
              <li className="text-earth-light">Ξύλινες Πέργκολες</li>
              <li className="text-earth-light">Κατασκευές Κήπου</li>
              <li className="text-earth-light">Ξύλινα Δάπεδα</li>
              <li className="text-earth-light">Ειδικές Κατασκευές</li>
              <li className="text-earth-light">Σχεδιασμός Τοπίου</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Επικοινωνία</h3>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin size={20} className="text-wood-light mt-1 flex-shrink-0" />
                <span className="text-earth-light">ΛΕΩΦ. ΦΛΕΜΙΝΓΚ 54, ΡΑΦΗΝΑ</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone size={20} className="text-wood-light flex-shrink-0" />
                <span className="text-earth-light">ΤΗΛ: 22940 78371, ΚΙΝ: 697-774-2882</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Mail size={20} className="text-wood-light flex-shrink-0" />
                <span className="text-earth-light">info@wooden-creations.gr</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-wood-light mt-1 flex-shrink-0" />
                <div className="text-earth-light">
                  <p>Δευτέρα-Παρασκευή: 9πμ - 7μμ</p>
                  <p>Σάββατο: 9πμ - 3μμ</p>
                  <p>Κυριακή: Κλειστά</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        <hr className="border-earth-light/20 my-8" />

        <div className="text-center text-earth-light text-sm">
          <p>&copy; {new Date().getFullYear()} Created by <a href="https://pcdoctoras.gr" target="_blank" rel="noopener noreferrer" className="text-wood-light hover:text-white transition-colors">pcdoctoras.gr</a>. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-earth-light/10 hover:bg-wood-dark transition-colors p-3 rounded-full"
  >
    {icon}
  </a>
);

export default Footer;
