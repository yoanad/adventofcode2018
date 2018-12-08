//
const fetch = require("node-fetch");
var fs = require('fs');

let filePath = "/Users/yoanadimova/Workspace/Javascript/input.txt";
let newFile = fs.readFileSync(filePath);
const data = newFile.toString('utf8');

let frequency = 0;
let prevFrequencies = [];
const lines = data.split('\n');
let counter = 0;

for(var line=0; line<lines.length; line++) {

	let firstChar = lines[line].charAt(0);
	let secondChar = parseInt(lines[line].slice(1));

	if (line == lines.length - 1 ) {
		line = -1;
	}

	if (firstChar == '-') {
		frequency -= secondChar;
	} else if (firstChar == '+') {
		frequency += secondChar;
	}

	if(prevFrequencies.includes(frequency)) {
		console.log(frequency);
		break;
	} else {
		prevFrequencies.push(frequency);
	}
}
