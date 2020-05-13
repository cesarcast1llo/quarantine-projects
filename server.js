const express = require('express');
const app = express();
// const router = express.Router();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.static('pages'));
app.use(express.static('assets'));

app.listen(port, function () {
  console.log(`running on port ${port} 🔥🔥`);
});
