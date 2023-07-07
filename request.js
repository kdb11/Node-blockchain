const axios = require('axios');
const Block = require('./block');
const Blockchain = require('./blockchain');

axios.get('http://localhost:3000/blocks')
  .then(response => {
    console.log('Blockchain:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

const newData = { data: 'New Data' };
axios.post('http://localhost:3000/blocks', newData)
  .then(response => {
    console.log('New Block:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });