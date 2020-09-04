var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/article-list', (req, res) => {
  console.log(req.query, '123');
  let data = {
    message: 'success!',
    name: req.query.name,
    age: req.query.age
  }
  data = JSON.stringify(data)
  res.end('func(' + data + ')');
});


module.exports = router;
