const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Your NewsAPI key
const NEWS_API_KEY = '8900277b6ca6444cac4775048dc074a2'; 

// Default route
app.get('/', (req, res) => {
  res.send('✅ News API backend is running!');
});

// API route to fetch news
app.get('/api/news', async (req, res) => {
  const { country, category, page, pageSize } = req.query;

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: country || 'in',  // Default country: India
        category: category || 'general',  // Default category: general
        page: page || 1,  // Default page: 1
        pageSize: pageSize || 9,  // Default page size: 9
        apiKey: NEWS_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(5000, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
