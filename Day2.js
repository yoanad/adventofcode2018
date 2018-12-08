//
const fetch = require("node-fetch");
var fs = require('fs');

let filePath = "/Users/yoanadimova/Workspace/Javascript/input2.txt";
let newFile = fs.readFileSync(filePath);
const data = newFile.toString('utf8');
const lines = data.split('\n');

let countA = 0;
let countB = 0;
let map = {};

for(var line=0; line<lines.length; line++) {

	for(var i = 0; i < lines[line].length; i++) {

		if (lines[line][i] in map) {
			map[lines[line][i]] += 1;
		} else {
			map[lines[line][i]] = 1;
		}
	}

	if (Object.values(map).includes(2)) {
		countA++;
	}
	if (Object.values(map).includes(3)) {
		countB++;
	}

	//console.log(map);
	map = {};
}

console.log(countA * countB);
