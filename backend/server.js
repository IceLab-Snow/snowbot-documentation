const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// MongoDB connection
const MONGODB_URI = process.env.MONGO_URL || process.env.MONGODB_URI || 'mongodb://mongo:dtnzATEseqItfDDFyqPIfQmOnqNMeSOM@mongodb.railway.internal:27017';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Simple Models
const FunctionSchema = new mongoose.Schema({
  name: String,
  returns: String,
  description: String,
  category: String,
  tags: [String],
  example: String,
  newFunction: { type: Boolean, default: false }
});

const Function = mongoose.model('Function', FunctionSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Get all functions
app.get('/api/functions', async (req, res) => {
  try {
    const functions = await Function.find();
    
    // Group by category
    const grouped = {};
    functions.forEach(func => {
      if (!grouped[func.category]) {
        grouped[func.category] = {
          name: func.category,
          icon: 'Code2',
          color: 'from-blue-500 to-cyan-500',
          functions: []
        };
      }
      grouped[func.category].functions.push(func);
    });
    
    res.json(grouped);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add function
app.post('/api/functions', async (req, res) => {
  try {
    const newFunction = new Function(req.body);
    await newFunction.save();
    res.status(201).json(newFunction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Bulk import
app.post('/api/functions/bulk', async (req, res) => {
  try {
    const { functions } = req.body;
    const results = { added: 0, skipped: 0 };
    
    for (const func of functions) {
      const exists = await Function.findOne({ name: func.name });
      if (!exists) {
        await Function.create(func);
        results.added++;
      } else {
        results.skipped++;
      }
    }
    
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Initialize database
app.post('/api/initialize', async (req, res) => {
  try {
    // Clear existing
    await Function.deleteMany({});
    
    // Add initial data if provided
    if (req.body.functions) {
      await Function.insertMany(req.body.functions);
    }
    
    res.json({ message: 'Database initialized' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User preferences (simple version)
app.get('/api/preferences/:userId', (req, res) => {
  res.json({
    userId: req.params.userId,
    darkMode: true,
    favorites: [],
    recentlyViewed: []
  });
});

app.put('/api/preferences/:userId', (req, res) => {
  res.json(req.body);
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});