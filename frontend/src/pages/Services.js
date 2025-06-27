import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Ошибка загрузки услуг:', err));
  }, []);

  return (
    <div className="services-page">
      <h2>Наши услуги</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p><strong>Описание:</strong> {service.description}</p>
            <p><strong>Примеры работ:</strong> {service.examples}</p>
            <p><strong>Цена:</strong> {service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
