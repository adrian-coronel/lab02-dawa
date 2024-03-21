const router = require('express').Router();
const path = require('path')

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/contact.html'));
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

module.exports = router;