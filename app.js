const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, JS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to render HTML
app.set('view engine', 'ejs');

// Route to show the login form
app.get('/', (req, res) => {
  res.render('login');
});

// Handle the form submission with AJAX
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple validation for demonstration
  if (username === 'admin' && password === 'password') {
    // Send a success response with the username and password
    res.json({
      username: username,
      password: password
    });
  } else {
    // Send an error message if the credentials are incorrect
    res.json({
      errorMessage: 'Invalid credentials. Please try again.'
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
