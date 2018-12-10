const fetch = require("node-fetch");
const fs = require('fs');

const filePath = "/home/yoana/experiments/adventofcode2018/input5.txt";
const newFile = fs.readFileSync(filePath);
let data = newFile.toString('utf8');
let res = '';
let didSth = false;

let i = 0;
while(i < data.length) {
		let charCode1 = data.charCodeAt(i);
		let charCode2 = data.charCodeAt(i+1);

		if (charCode1 == charCode2 + 32 || charCode1 == charCode2 - 32) {
			data = data.slice(0, i) + data.slice(i+2, data.length);
			i = 0;
		} else {
			i++;
		}
}

console.log(data.length);
//dabCBAcaDA