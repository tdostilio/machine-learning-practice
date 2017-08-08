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


csv({noheader: true, headers: names})
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        data.push(jsonObj);
    })
    .on('done', (error) => {
        separationSize = 0.7 * data.length;
        data = shuffleArray(data);
        dressData();
    });


/**
 * https://stackoverflow.com/a/12646864
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

 function shuffleArray(array) {
     for (var i = array.length -1; i >0; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var temp = array[i];
         array[i] = array[j];
         array[j] = tempt;
     }
    return array;   
 }

function dressData() {

/**
 * There are three different types of Iris flowers
 * that this dataset classifies.
 *
 * 1. Iris Setosa (Iris-setosa)
 * 2. Iris Versicolor (Iris-versicolor)
 * 3. Iris Virginica (Iris-virginica)
 *
 * We are going to change these classes from Strings to numbers.
 * Such that, a value of type equal to
 * 0 would mean setosa,
 * 1 would mean versicolor, and
 * 3 would mean virginica
 */
    let types = new Set();

    data.forEach((row) => {
        types.add(row.type);
    });

    typesArray = [...types];

    data.forEach((row) => {
        let rowArray, typeNumber;

        rowArray = Object.keys(row).map(key => parseFloat(row[key])).slice(0,4);

        typeNumber = typesArray.indexOf(row.type); 

        X.push(rowArray);
        y.push(typeNumber);
    });

    trainingSetX = X.slice(0, separationSize);
    trainingSetY = X.slice(0, separationSize);
    testSetX = X.slice(separationSize);
    testSetY = y.slice(separationSize);

    train();
}

function train() {
    knn = new KNN(trainingSetX, trainingSetY, {k: 7});
    test();
}