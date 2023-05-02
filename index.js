const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const allData = require('./data/allData.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('my site is running')
});

app.get("/alldata", (req, res) => {
  res.send(allData);
});

app.listen(port, () => {
  console.log(`hey : ${port}`)
})