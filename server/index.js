const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use('/', express.static('public'));
app.use('/analysis/', express.static('public/analyses'));

app.listen(port, () => console.log(`Listening on port ${port}`));
