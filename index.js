const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; // SIMPLE LINEAR REGRESSION

const csvFilePath = 'advertising.csv'; 
let csvData = [];  //parsed Data
let x = []; //Input
let y = []; //Output

let regressionModel;


csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        csvData.push(jsonObj);
    })
    .on('done', () => {
        dressData(); // To get data points from JSON Objects
        performRegression();
    })


function dressData() {
    /**
     * One row of the data object looks like:
     * {
     *   TV: "10",
     *   Radio: "100",
     *   Newspaper: "20",
     *   "Sales": "1000"
     * }
     *
     * Hence, while adding the data points,
     * we need to parse the String value as a Float.
     */
        csvData.forEach((row) => {
            x.push(f(row.Radio));
            y.push(f(row.Sales));
        });
}

function f(s) {
    return parseFloat(s)
}