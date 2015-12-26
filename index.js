var express = require('express');
var app = express();

var bodyParser = require('body-parser');


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
  console.log(req.body);
  body = {
    response_type: "in_channel",
    text: "I am a Slackbot. Everyone in the channel can see this message."
  };
  res.send(body);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
