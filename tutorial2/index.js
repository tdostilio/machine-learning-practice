const KNN = require('ml-knn');
const csv = require('csvtojson');
const prompt = require('prompt');
let knn;

const csvFilePath = 'iris.csv'; //Data
const names = ['sepalLength', 'sepalWidth', 'petalLength', 'type']; // For header

let separationSize; // To Separate training and test data

let data = [],
    X = [],
    y = [];


let trainingSetX = [];
let trainingSetY = [];
let testSetX = [];
let testSetY = [];
