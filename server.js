const express = require('express');

// Create new app
const app = express();
const port = process.env.PORT || 8000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('dist'));
app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
