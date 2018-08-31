
let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Holaaa, Mundo');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use('/index', express.static('public'));
