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

		minuteAmountMap = fillMinuteAmoutMap(guard, minuteAmountMap, end - start);
		guardMap = fillGuardMap(guard, guardMap, start, end);
	}
});

function fillMinuteAmoutMap(guard, minuteAmountMap, mins) {
	if (minuteAmountMap.has(guard)) {
		let val = minuteAmountMap.get(guard) + mins;
		minuteAmountMap.set(guard, val);
	} else {
		minuteAmountMap.set(guard, mins);
	}
	return minuteAmountMap;
}

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


function findMaxGuard(map) {
	let max = -232210322319219021;
	let guard;
	for (m of map) {
		if (m[1] > max) {
			max = m[1];
			guard = m[0];
		}
	}
	return guard;
}

function whichMinute(guardId, map) {
	let guardMinutes = map.get(guardId);
	let max = -232210322319219021;
	let result = 0;

	if (map.has(guardId)) {
		let innerMap = map.get(guardId);
		for (o of innerMap) {
			if (o[1] > max) {
				max = o[1];
				result = o[0];
			}
		}
	}
	return result;
}

function multiply(minute, guardId) {
	return minute * guardId;
}

let guardId = findMaxGuard(minuteAmountMap);
let minute = whichMinute(guardId, guardMap);

whichMinute(findMaxGuard(minuteAmountMap), guardMap);

console.log('Multip: ' + multiply(guardId,minute));
console.log('Minute: ' + minute);
console.log('Guard: ' + guardId);
//console.log(guardMap);
//console.log(minuteAmountMap);


