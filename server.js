const express = require('express');
const bodyParser = require("body-parser");
const app = express();


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(request, response) => {
});

app.post('/',(request, response) => {
  });

app.delete('/', (req, res) => {
});

app.listen(80, () => console.log("NodeJS server is on (80)"));
