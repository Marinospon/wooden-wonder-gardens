
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-earth-light/10 py-20">
      <div className="text-center px-4 max-w-xl">
        <h1 className="text-7xl md:text-9xl font-serif font-bold text-wood-dark mb-4">404</h1>
        <p className="text-2xl md:text-3xl text-foreground mb-8">Oops! We couldn't find that page.</p>
        <p className="text-lg text-muted-foreground mb-12">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Button asChild className="bg-wood hover:bg-wood-dark text-white">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
