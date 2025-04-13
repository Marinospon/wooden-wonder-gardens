
import React from 'react';
import { Star } from 'lucide-react';

// Sample customer reviews based on the Google reviews URL
const reviews = [
  {
    id: 1,
    name: "Spiros Theodoropoulos",
    rating: 5,
    date: "2 months ago",
    text: "Άψογη εξυπηρέτηση από τον Αντρέα φτιάξαμε υπέροχες περγκολές πολύ προσιτές τιμές και άριστες κατασκευές,τον συστήνω ανεπιφύλακτα!",
    profileImage: "/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png"
  },
  {
    id: 2,
    name: "Christos Papageorgiou",
    rating: 5,
    date: "3 months ago",
    text: "Άψογη εξυπηρέτηση και επικοινωνία. Πολύ καλή δουλειά και τιμή. Συνιστώ ανεπιφύλακτα.",
    profileImage: "/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png"
  },
  {
    id: 3,
    name: "Κατερίνα Κ.",
    rating: 5,
    date: "5 months ago",
    text: "Έκανα την καλύτερη επιλογή για τον κήπο μου! Άριστη επικοινωνία με τον κύριο Ανδρέα, άψογη εξυπηρέτηση, τέλεια χειροποίητη κατασκευή, γρήγορη παράδοση! Το συστήνω ανεπιφύλακτα!",
    profileImage: "/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png"
  },
  {
    id: 4,
    name: "Ελένη Τζανετάκου",
    rating: 5,
    date: "a year ago",
    text: "Πολύ καλή επικοινωνία με τον κύριο Ανδρέα. Ήρθε σπίτι, είδε το χώρο και μας έφτιαξε μία υπέροχη ξύλινη πέργκολα. Απίστευτη ποιότητα κατασκευής, τέλειο φινίρισμα και άψογη εξυπηρέτηση. Σίγουρα θα συνεργαστούμε ξανά!",
    profileImage: "/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png"
  },
  {
    id: 5,
    name: "Dimitra Papai",
    rating: 5,
    date: "a year ago",
    text: "Άψογη συνεργασία, εξυπηρέτηση και τέλεια δουλειά! Τον προτείνω ανεπιφύλακτα! Ευχαριστούμε πολύ!",
    profileImage: "/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png"
  },
  {
    id: 6,
    name: "Giorgos Savvidis",
    rating: 5,
    date: "2 years ago",
    text: "Μεγάλη γκάμα ξύλινων κατασκευών σε προσιτές τιμές και άψογη εξυπηρέτηση.",
    profileImage: "/lovable-uploads/785321cc-1ec1-4164-b810-0a7e4728e20c.png"
  }
];

const CustomerReviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
      
      <div className="col-span-full text-center mt-8">
        <a 
          href="https://www.google.com/search?q=%CE%BE%CF%85%CE%BB%CE%B9%CE%BD%CE%B5%CF%82+%CE%B4%CE%B7%CE%BC%CE%B9%CE%BF%CF%85%CF%81%CE%B3%CE%B9%CE%B5%CF%82+%CE%BC%CF%80%CF%81%CE%BF%CF%85%CE%BC%CE%B1%CF%83#lrd=0x14a18934fda8e9e9:0x9e8a19e1ac4c5c56,1,,,,"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-wood hover:text-wood-dark font-medium flex items-center justify-center gap-1"
        >
          Δείτε όλες τις αξιολογήσεις στο Google
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    rating: number;
    date: string;
    text: string;
    profileImage: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover-grow transition-all">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={review.profileImage} 
            alt={review.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-serif font-semibold text-lg">{review.name}</h3>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground italic">"{review.text}"</p>
    </div>
  );
};

export default CustomerReviews;
