var express = require('express'),
    bodyParser = require('body-parser'),
    { mongoose } = require('./db/mongoose'),
    { Question } = require('./models/question'),
    cors = require('cors'),
    port = process.env.PORT || 8000;

var app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(`${__dirname}/public`));

// get all questions
app.get('/questions', (req, res) => {
  Question.find().then(questions => res.send({questions})).catch(err => res.status(400).send(err));
});

app.listen(port, () => {
  console.log('Server is running on port', port);
});

module.exports = { app };
