const fetch = require("node-fetch");
const fs = require('fs');

const filePath = "/Users/yoanadimova/Workspace/adventofcode2018/input5_test.txt";
const newFile = fs.readFileSync(filePath);
let data = newFile.toString('utf8');
console.log(data);
let res = '';

for (let i=0; i < data.length-1; i++) {

	let charCode1 = data.charCodeAt(i);
	let charCode2 = data.charCodeAt(i+1);

	if (charCode1 == charCode2 + 32 || charCode1 == charCode2 - 32) {
		res = data.slice(0, i) + data.slice(i+2, data.length);
		 //input.slice(0, i).concat(input.slice(i + 2));
		 //break;
		console.log(res);
	}
}

//console.log(res);
//dabCBAcaDA