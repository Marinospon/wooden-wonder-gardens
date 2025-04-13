
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
            <h3 className="text-xl font-serif font-semibold mb-4">Wooden Wonder Gardens</h3>
            <p className="text-earth-light mb-6">
              Crafting beautiful wooden garden structures and spaces since 1995.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-earth-light hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-earth-light hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-earth-light hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-earth-light hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-earth-light">Wooden Pergolas</li>
              <li className="text-earth-light">Garden Structures</li>
              <li className="text-earth-light">Wooden Decking</li>
              <li className="text-earth-light">Custom Garden Features</li>
              <li className="text-earth-light">Landscaping Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin size={20} className="text-wood-light mt-1 flex-shrink-0" />
                <span className="text-earth-light">123 Garden Lane, Woodville, WV 54321</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone size={20} className="text-wood-light flex-shrink-0" />
                <span className="text-earth-light">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Mail size={20} className="text-wood-light flex-shrink-0" />
                <span className="text-earth-light">info@woodenwondergardens.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-wood-light mt-1 flex-shrink-0" />
                <div className="text-earth-light">
                  <p>Monday-Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        <hr className="border-earth-light/20 my-8" />

        <div className="text-center text-earth-light text-sm">
          <p>&copy; {new Date().getFullYear()} Wooden Wonder Gardens. All rights reserved.</p>
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
