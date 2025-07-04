import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="team-section">
        <h2>Наша команда</h2>
        <p>
          В <strong>"Мастерская Ванных"</strong> мы гордимся нашей командой профессионалов, которые делают возможным создание идеальных ванных комнат.
          Каждый из нас — это высококвалифицированный специалист, обладающий богатым опытом и страстью к своему делу.
        </p>
        <p>
          <strong>Дизайнеры интерьеров:</strong> помогают создать уникальный и функциональный дизайн, учитывая ваши предпочтения.
        </p>
        <p>
          <strong>Сантехники:</strong> обеспечивают безопасную и качественную установку оборудования.
        </p>
        <p>
          <strong>Отделочники:</strong> укладка плитки, покраска, отделка — всё идеально.
        </p>
        <p>
          <strong>Проектировщики:</strong> разрабатывают техническую документацию и планы.
        </p>
        <p>
          <strong>Менеджеры проектов:</strong> контролируют сроки, бюджет и держат с вами связь на всех этапах.
        </p>
        <p className="philosophy">
          Мы верим, что успешный проект — это результат командной работы. Мы стремимся к тому, чтобы каждый клиент остался доволен результатом.
          С нами вы получите не только красивую, но и функциональную ванную комнату.
        </p>
      </section>

      <section className="gallery-section">
        <h2>Наши работы</h2>
        <div className="gallery">
          <img src="/work1.jpg" alt="Работа 1" />
          <img src="/work2.jpg" alt="Работа 2" />
          <img src="/work3.jpg" alt="Работа 3" />
          <img src="/work4.jpg" alt="Работа 4" />
          <img src="/work5.jpg" alt="Работа 5" />
        </div>
      </section>

      <section className="reviews-section">
        <h2>Отзывы клиентов</h2>
        <div className="review">
          <p><strong>Ирина П.</strong></p>
          <p>
            "Я очень довольна работой команды 'Мастерская Ванных'! Они полностью преобразили мою ванную комнату.
            Дизайнер предложил отличные идеи, а мастера выполнили все работы быстро и качественно.
            Особенно понравилось, что они всегда были на связи и отвечали на все мои вопросы. Рекомендую всем!"
          </p>
        </div>
        <div className="review">
          <p><strong>Сергей А.</strong></p>
          <p>
            "Обратился в 'Мастерская Ванных' по рекомендации друга, и не пожалел! Ремонт прошел без задержек,
            а качество работы превзошло все ожидания. Спасибо за профессионализм и внимательное отношение!"
          </p>
        </div>
        <div className="review">
          <p><strong>Карина О.</strong></p>
          <p>
            "С самого начала меня поразило, как внимательно они отнеслись к моим пожеланиям.
            Результат превзошел все ожидания! Ванная комната стала не только красивой, но и очень удобной."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
