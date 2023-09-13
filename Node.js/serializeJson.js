const {writeFileSync} = require("fs");
const langData = require('./input.json');

const newData = {};

const populateJSONRecursively = (json, parent)=>{
    for (const jsonKey in json) {
        console.log(parent, jsonKey, typeof json[jsonKey]);
        if(typeof json[jsonKey] === 'string'){
            newData[`${parent?`${parent}.`:''}${jsonKey}`] = json[jsonKey];
        } else {
            readJSON(json[jsonKey], jsonKey);
        }
    }
}

async function generateOutputData(){
    populateJSONRecursively(langData);
    const writeData = Object.keys(newData).map((key)=>{
        return {
            key,
            value: newData[key]
        }
    })
    writeFileSync('./output.json', JSON.stringify(writeData, null, 4));
}

generateOutputData();
