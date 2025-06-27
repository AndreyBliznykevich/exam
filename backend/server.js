const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/handyman', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  examples: String,
  price: String,
});


const Service = mongoose.model('Service', serviceSchema);


app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка загрузки услуг' });
  }
});


const calculatorServiceSchema = new mongoose.Schema({
  title: String,
  pricePerM2: Number,
  pricePerPoint: Number,
  priceFixed: Number
});


const CalculatorService = mongoose.model('CalculatorService', calculatorServiceSchema, 'calculator_services');


app.get('/api/calculator-services', async (req, res) => {
  try {
    const services = await CalculatorService.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка загрузки калькулятора услуг' });
  }
});


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema, 'contacts');


app.post('/api/contacts', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Сообщение сохранено' });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при сохранении' });
  }
});


const commentSchema = new mongoose.Schema({
  message: String,
  date: { type: Date, default: Date.now }
});
const Comment = mongoose.model('Comment', commentSchema);


app.get('/api/comments', async (req, res) => {
  const comments = await Comment.find().sort({ date: -1 });
  res.json(comments);
});


app.post('/api/comments', async (req, res) => {
  const newComment = new Comment({ message: req.body.message });
  await newComment.save();
  res.status(201).json(newComment);
});


app.listen(5000, () => console.log('? Backend running on http://localhost:5000'));
