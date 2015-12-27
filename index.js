var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require('url');
var request = require('request');

app.set('port', (process.env.PORT || 9001));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/post', function(req, res){

  var parsed_url = url.format({
    pathname: 'https://api.genius.com/search',
    query: {
      access_token: process.env.GENIUS_ACCESS,
      q: req.body.text
    }
  });

  request(parsed_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var first_url = data.response.hits[0].result.url;

      var body = {
        response_type: "in_channel",
        text: first_url
      };

      res.send(body);
    }
  });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
