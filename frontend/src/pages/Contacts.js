import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Ошибка при отправке формы');
    }
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Ошибка при подключении к серверу');
  }
};


  return (
    <div className="contacts-page">
      <h2>Контакты</h2>

      <div className="contact-info">
        <p><strong>Адрес:</strong> г. Москва, ул. Молодежная, 11, к. 15</p>
        <p><strong>Телефон:</strong> (912) 00-55-000</p>
        <p><strong>Email:</strong> mastervann@mail.ru</p>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Форма обратной связи</h3>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ваше имя" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Телефон" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Ваше сообщение" rows="4" required />
          <button type="submit">Отправить</button>
          {submitted && <p className="success-msg">Ваше сообщение успешно отправлено!</p>}
        </form>

        <div className="map">
          <h3>Мы на карте</h3>
          <img src="/maps.jpg" alt="Карта" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
