const fetch = require("node-fetch");
const fs = require('fs');

const filePath = "/Users/yoanadimova/Workspace/adventofcode2018/input4.txt";
const newFile = fs.readFileSync(filePath);
const data = newFile.toString('utf8').split('\n');
let minuteAmountMap = new Map();
let guardMap = new Map();
let guard = 0;
let start = 0;
let end = 0;

data.sort();

data.forEach(function(value, index) {
	let input = value.split(" ");
	let date = input[0].replace('[','').split('-');
	let minutes =  input[1].replace(']','').split(':');

	if (input[3].includes('#')) {
		guard = input[3].replace('#','');
		start = 0;
		end = 0;
	} else if(input[2] == 'falls') {
		start = parseInt(minutes[1]);

	} else if (input[2] == 'wakes'){
		end = parseInt(minutes[1]);
		guardMap = fillGuardMap(guard, guardMap, start, end);
	}
});

function fillGuardMap(guard, guardMap, start, end) {
	if (guardMap.has(guard)) {
		let innerMap;
		if (guardMap.has(guard)) {
			innerMap = guardMap.get(guard);
		}

		for (let minute = start; minute < end; minute++) {
			if (innerMap.has(minute)) {
				let val = innerMap.get(minute) + 1;
				//console.log(guard,minute,val);
				innerMap.set(minute, val);
			} else {
				innerMap.set(minute, 1);
			}
		}
	}
	else {
		guardMap.set(guard, new Map());
		let innerMap = guardMap.get(guard);
		for (let minute = start; minute < end; minute++) {
			if (innerMap.has(minute)) {
				let val = innerMap.get(minute) + 1;
				innerMap.set(minute, val);
			} else {
				innerMap.set(minute, 1);
			}
		}
	}
	return guardMap;
}

function whichMostFrequentlyAsleep(map) {
	let max = 0;
	let id = '';
	let min = 0;

	for (m of map) {
		let innerMap = map.get(m[0]);
		for (inn of innerMap) {
			if (inn[1] > max) {
				max = inn[1];
				id = m[0];
				min = inn[0];
			}
		}
	}
	return id * min;
}

let mostFrequentlyAsleep = whichMostFrequentlyAsleep(guardMap);
console.log(mostFrequentlyAsleep);
