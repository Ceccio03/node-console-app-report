const fs = require("fs");
const _ = require("lodash");
const inputUrl = process.argv[2];
const outputUrl = process.argv[3];
let data = readFile(inputUrl);

if (data) {

    const result = transformFunction(data, divider)

    writeData(outputUrl, result);
}

function readFile(url){
    try {
        const data = fs.readFileSync(url, "utf8");
        return data;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

function writeData(url, data){
    try {
        fs.writeFileSync(url, data);
    } catch (err) {
        console.error(err.message);
    }
}