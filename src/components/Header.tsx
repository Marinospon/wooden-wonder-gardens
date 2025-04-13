
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm py-3 shadow-md' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-bold text-wood-dark">
            ΜΠΡΟΥΜΑΣ ΑΝΔΡΕΑΣ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" active={isActive('/')}>Αρχική</NavLink>
          <NavLink to="/portfolio" active={isActive('/portfolio')}>Έργα μας</NavLink>
          <NavLink to="/about" active={isActive('/about')}>Σχετικά με εμάς</NavLink>
          <NavLink to="/contact" active={isActive('/contact')}>Επικοινωνία</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" active={isActive('/')} onClick={() => setMobileMenuOpen(false)}>
              Αρχική
            </MobileNavLink>
            <MobileNavLink to="/portfolio" active={isActive('/portfolio')} onClick={() => setMobileMenuOpen(false)}>
              Έργα μας
            </MobileNavLink>
            <MobileNavLink to="/about" active={isActive('/about')} onClick={() => setMobileMenuOpen(false)}>
              Σχετικά με εμάς
            </MobileNavLink>
            <MobileNavLink to="/contact" active={isActive('/contact')} onClick={() => setMobileMenuOpen(false)}>
              Επικοινωνία
            </MobileNavLink>
            <Button className="mt-2 bg-wood hover:bg-wood-dark">
              Ζητήστε Προσφορά
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      'text-base font-medium hover:text-wood-dark transition-colors relative',
      active 
        ? 'text-wood-dark after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-0.5 after:bg-wood-dark' 
        : 'text-foreground'
    )}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, active, onClick, children }: MobileNavLinkProps) => (
  <Link
    to={to}
    className={cn(
      'text-lg py-2 font-medium transition-colors',
      active ? 'text-wood-dark' : 'text-foreground'
    )}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
