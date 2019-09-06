const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3050;

app.use('/browse', cors(), require('./routes/browseRouter'));

app.listen(port, function() {
  console.log('Example app listening at localhost:%s', port);
});
