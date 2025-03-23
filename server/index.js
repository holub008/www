const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use('/', express.static('public', {
  setHeaders: (res, filePath) => {
    if (!filePath.endsWith('.html')) {
      const ext = path.extname(filePath);
      if (!ext) {
        res.setHeader('Content-Type', 'text/html');
      }
    }
  },
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/not_found.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
