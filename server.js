const express = require('express');

// Create new app
const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});