var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var url = require('url');
var request = require('request');

app.set('port', (process.env.PORT || 9001));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.post('/post', function(req, res){
  var parsed_url = url.format({
    pathname: 'https://api.genius.com/search',
    query: {
      access_token: process.env.GENIUS_ACCESS,
      q: 'Kendrick Lamar'
    }
  });

  request(parsed_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('success');
      var data = JSON.parse(body);
      var first_url = data.response.hits[0].result.url;

      body = {
        response_type: "in_channel",
        text: "Here is a hardcoded result" + first_url
      };
      res.send(body);

    }
  })


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
