import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');


  useEffect(() => {
    fetch('http://localhost:5000/api/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: comment })
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments(prev => [newComment, ...prev]);
      setComment('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Вы подписались на обновления!');
  };

  return (
    <div className="blog-page">
      <h2>Блог и советы</h2>

      {/* Статьи */}
      <article className="blog-post">
        <h3>Топ-5 трендов в дизайне ванных комнат на 2024 год</h3>
        <p><strong>Введение:</strong> Ванная комната — это не только функциональное пространство, но и место, где мы можем расслабиться. В этой статье — самые актуальные тренды на 2024 год.</p>
        <ul>
          <li><strong>1. Минимализм:</strong> Чистые линии, нейтральные цвета, встроенные системы хранения.</li>
          <li><strong>2. Натуральные материалы:</strong> Дерево, камень, тёплая атмосфера.</li>
          <li><strong>3. Умные технологии:</strong> Зеркала с подсветкой, термостаты, управление светом.</li>
          <li><strong>4. Яркие акценты:</strong> Цветные плитки, полотенца, аксессуары.</li>
          <li><strong>5. Экологичность:</strong> Водосберегающие устройства и экологичные материалы.</li>
        </ul>
        <p><strong>Заключение:</strong> Следуя этим трендам, вы создадите красивую и удобную ванную комнату.</p>
      </article>

      {/* Полезные советы */}
      <section className="tips-section">
        <h3>Полезные советы по ремонту</h3>
        <div className="tip">
          <h4>1. Планируйте пространство заранее</h4>
          <p>Перед началом ремонта важно тщательно спланировать, как будет выглядеть ваша ванная комната...</p>
        </div>
        <div className="tip">
          <h4>2. Выбирайте качественные материалы</h4>
          <p>Влагостойкие и долговечные материалы — основа хорошего ремонта...</p>
        </div>
        <div className="tip">
          <h4>3. Не забывайте о вентиляции</h4>
          <p>Ванная без вентиляции быстро становится источником влаги и плесени...</p>
        </div>
      </section>

      {/* Комментарии */}
      <section className="comments-section">
        <h3>Комментарии</h3>

        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            placeholder="Напишите комментарий..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button type="submit">Отправить</button>
          {submitted && <p className="success-msg">✅ Ваш комментарий отправлен.</p>}
        </form>

        <div className="comment-list">
          {comments.length === 0 && <p>Пока нет комментариев. Будьте первым!</p>}
          {comments.map((c, i) => (
            <div key={i} className="comment-box">
              <p>{c.message}</p>
              <span>{new Date(c.date).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Подписка */}
      <section className="subscribe-section">
        <h3>Подписка на обновления</h3>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Введите ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Подписаться</button>
        </form>
      </section>
    </div>
  );
};

export default Blog;
