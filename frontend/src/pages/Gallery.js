import React, { useState } from 'react';
import './Gallery.css';

const galleryData = [
  { src: '/p1.jpg', category: 'Демонтаж' },
  { src: '/p2.jpg', category: 'Демонтаж' },
  { src: '/p3.jpg', category: 'Демонтаж' },

  { src: '/ph1.jpg', category: 'Отделка' },
  { src: '/ph2.jpg', category: 'Отделка' },
  { src: '/ph3.jpg', category: 'Отделка' },

  { src: '/pho1.jpg', category: 'Сантехника' },
  { src: '/pho2.jpg', category: 'Сантехника' },
  { src: '/pho3.jpg', category: 'Сантехника' },
];

const categories = ['Все', 'Демонтаж', 'Отделка', 'Сантехника'];

const Gallery = () => {
  const [filter, setFilter] = useState('Все');

  const filtered = filter === 'Все'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      <h2>Галерея проектов</h2>

      <div className="gallery-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((item, i) => (
          <img key={i} src={item.src} alt={`Фото ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
