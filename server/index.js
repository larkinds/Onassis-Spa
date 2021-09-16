const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

//use builtin environment port or default to 3030
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log('meow');
});
