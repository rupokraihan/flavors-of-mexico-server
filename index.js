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
app.get('/alldata/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  const selectedChefs = allData.find(d => d.id === id);
  res.send(selectedChefs);
})

app.listen(port, () => {
  console.log(`hey : ${port}`)
})