const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const Block = require('./block');

const app = express();
app.use(bodyParser.json());

const blockchain = new Blockchain();

app.get('/blocks', (req, res) => {
  res.json(blockchain.chain);
});

app.post('/blocks', (req, res) => {
  const data = req.body.data;
  const newBlock = new Block(
    blockchain.chain.length,
    new Date().toISOString(),
    data
  );

  if (blockchain.isChainValid()) {
    blockchain.addBlock(newBlock);
    res.json(newBlock);
  } else {
    res.status(500).json({ error: 'Blockchain is invalid.' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Blockchain API!');
});
