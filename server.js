import express from 'express';
import mongoose from 'mongoose';
import xml2js from 'xml2js';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize dotenv
dotenv.config();

// Initialize app and middlewares
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


// MongoDB Schema for saving favorite quotes
const quoteSchema = new mongoose.Schema({
  quote: String,
  userId: String, // For user-specific quotes (you can implement user auth later)
});

const Quote = mongoose.model('Quote', quoteSchema);

// API route to get a random quote from the XML file
app.get('/api/quotes', (req, res) => {
  fs.readFile('./data/quotes.xml', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load quotes.' });
    }

    xml2js.parseString(data, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing XML.' });
      }

      const quotes = result.quotes.quote;
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      res.json({ quote: randomQuote });
    });
  });
});

// API route to save a favorite quote to MongoDB
app.post('/api/save-favorite', async (req, res) => {
  const { quote, userId } = req.body;

  if (!quote || !userId) {
    return res.status(400).json({ error: 'Quote and userId are required.' });
  }

  try {
    const newFavoriteQuote = new Quote({ quote, userId });
    await newFavoriteQuote.save();
    res.status(201).json({ message: 'Quote saved to favorites.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save quote.' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
