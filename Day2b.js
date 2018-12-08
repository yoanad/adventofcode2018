//
const fetch = require("node-fetch");
var fs = require('fs');

let filePath = "/Users/yoanadimova/Workspace/Javascript/input2.txt";
let newFile = fs.readFileSync(filePath);
const data = newFile.toString('utf8');
const lines = data.split('\n');

for(var i=0; i<lines.length; i++) {
		for(var j=0; j<lines.length; j++) {
				var res = compare(lines[i], lines[j]);
				if(res != "") {
					console.log(res);
				}
		}
}

function compare(word1, word2) {
	let diff = 0;
	let newWord = "";
	let diffIdx = 0;

	for (var i = 0; i < word1.length; i++) {
		if(word1[i] != word2[i]) {
			diff += 1;
			diffIdx = i;
			if(diff>1) {
				break;
			}
		}
	}
	if (diff == 1) {
		newWord = word1.slice(0, diffIdx) + word1.slice(diffIdx+1);
	}
	return newWord;
}
