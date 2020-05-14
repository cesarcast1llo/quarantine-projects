const express = require('express');
const app = express();
// const router = express.Router();

var port = process.env.PORT || 3000;

// router.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/pages/index.html'));
// });

// router.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/assets/styles/index.css'));
//   console.log('css');
// });

// router.get('/timer', function (req, res) {
//   res.sendFile(path.join(__dirname + '/timer.html'));
//   console.log('got it');
// });

app.use(express.static(__dirname));
app.use(express.static('pages'));
app.use(express.static('assets'));

app.listen(port, function () {
  console.log(`running on port ${port} 🔥🔥`);
});
