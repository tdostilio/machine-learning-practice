const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; // SIMPLE LINEAR REGRESSION

const csvFilePath = 'advertising.csv'; 
let csvData = [];
let x = [];
let y = [];