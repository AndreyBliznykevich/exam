import React, { useEffect, useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [services, setServices] = useState([]);
  const [area, setArea] = useState('');
  const [outlets, setOutlets] = useState('');
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/calculator-services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Ошибка загрузки услуг калькулятора:', err));
  }, []);

  const toggleService = (title) => {
    setSelected(prev =>
      prev.includes(title)
        ? prev.filter(s => s !== title)
        : [...prev, title]
    );
  };

  const calculate = () => {
    const m2 = parseFloat(area) || 0;
    const points = parseInt(outlets) || 0;

    let total = 0;

    services.forEach(service => {
      if (!selected.includes(service.title)) return;

      if (service.pricePerM2) {
        total += service.pricePerM2 * m2;
      } else if (service.pricePerPoint) {
        total += service.pricePerPoint * points;
      } else if (service.priceFixed) {
        total += service.priceFixed;
      }
    });

    setResult(total);
  };

  return (
    <div className="calculator">
      <h2>Калькулятор ремонта ванной</h2>

      <div className="input-block">
        <label>Площадь ванной комнаты (м²):</label>
        <input
          type="number"
          min="0"
          value={area}
          onChange={e => setArea(e.target.value)}
          placeholder="например, 4"
        />
      </div>

      <div className="input-block">
        <label>Количество электрических точек (розеток, светильников):</label>
        <input
          type="number"
          min="0"
          value={outlets}
          onChange={e => setOutlets(e.target.value)}
          placeholder="например, 3"
        />
      </div>

      <div className="services-select">
        <label>Выберите услуги:</label>
        <div className="services-list">
          {services.map((s, i) => (
            <label key={i}>
              <input
                type="checkbox"
                checked={selected.includes(s.title)}
                onChange={() => toggleService(s.title)}
              />
              {s.title}
            </label>
          ))}
        </div>
      </div>

      <button onClick={calculate}>Рассчитать</button>

      {result !== null && (
        <div className="result">
          <h3>Примерная стоимость ремонта:</h3>
          <p><strong>{result.toLocaleString()} ₽</strong></p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
