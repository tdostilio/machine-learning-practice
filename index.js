const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; // SIMPLE LINEAR REGRESSION

const csvFilePath = 'advertising.csv'; 
let csvData = [];  //parsed Data
let X = []; //Input
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
            X.push(f(row.Radio));
            y.push(f(row.Sales));
        });
}

function f(s) {
    return parseFloat(s)
}

function performRegression() {
    regressionModel = new SLR(X,y); //Train the model on training data
    console.log(regressionModel.toString(3));
    predictOutput();
}

function predictOutput() {
    rl.question('Enter input X for prediction (Press CTRL+C to exit) : ', (answer) => {
        console.log(`At X  = ${answer}, y = ${regressionModel.predict(parseFloat(answer))}`);
        predictOutput();
    });
}