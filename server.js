const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/signup', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'signup.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'signin.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => console.log('Server is running...'));
