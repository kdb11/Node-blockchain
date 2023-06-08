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