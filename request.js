/* const { json } = require("body-parser");
const { response } = require("express");
const res = require("express/lib/response");

fetch('http://localhost:3000/blocks')
.then(response=>{
    return response.json();
}).then(json=>{
    console.log(json);
})
 */
const fetch = require('node-fetch');
const Block = require('./block');
const Blockchain = require('./Blockchain');

async function getBlocks() {
    let response = await fetch('http://localhost:3000/blocks');
    let data = await response.json();
    return data;
}

getBlocks().then(response=>{
    console.log(response)
});