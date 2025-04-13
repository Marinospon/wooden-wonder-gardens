
import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.4039089394835!2d24.00693121215894!3d38.08047757039903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1889d3aea11db%3A0xbd2088ef87cc4c1f!2sLeof.%20Fleming%2054%2C%20Rafina%20190%2009!5e0!3m2!1sen!2sgr!4v1744565428363!5m2!1sen!2sgr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ξύλινες Δημιουργίες ΜΠΡΟΥΜΑΣ ΑΝΔΡΕΑΣ - Χάρτης"
        className="rounded-lg"
      />
    </div>
  );
};

export default Map;
