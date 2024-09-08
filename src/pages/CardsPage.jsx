// Lazy loading the Card component
import React, { Suspense, useState, useEffect } from 'react';

const Card = React.lazy(() => import('../components/Menu_2.jsx/Card'));

function CardsPage() {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    fetch('/Menu2Data.json')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-gray-100 p-12 rounded-lg mt-16 ml-64 mr-8 h-auto relative" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 4px 20px rgba(0, 0, 0, 0.13)' }}>
      <div className="absolute top-4 left-4 text-xl font-bold text-gray-800">
        TestProject
      </div>
  
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-wrap gap-10 mt-2">
          {cards.map((card) => (
            <Card
              key={card.id}
              running={card.running}
              content={card.content}
              time={card.time}
              progress={card.progress}
              error={card.error}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default CardsPage;
