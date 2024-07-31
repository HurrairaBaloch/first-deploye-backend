const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sample GET route
app.get('/api/users', (req, res) => {
  res.json({ users: ['John', 'Jane', 'Bob'] });
});

// Sample POST route
app.post('/api/user', (req, res) => {
  const { name } = req.body;
  res.json({ message: `User ${name} created successfully` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});