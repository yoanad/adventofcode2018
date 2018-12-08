//
const fetch = require("node-fetch");
var fs = require('fs');

let filePath = "/Users/yoanadimova/Workspace/Javascript/input3.txt";
let newFile = fs.readFileSync(filePath);
const data = newFile.toString('utf8');
const lines = data.split('\n');
let overlaps = 0;

function create2DArray(numRows, numCols) {
	let array = new Array(numRows).fill(0);
	for (let i=0; i<numCols; i++) {
		array[i] = new Array(numCols).fill(0);
	}
	return array;
}

let arr = create2DArray(1000, 1000);

lines.forEach(function(value, index) {
	//if(index < 2) {
		//console.log(index);
		let input = value.split(/#| @ |,|: |x/);
		let id = parseInt(input[1]);
		let x = parseInt(input[2]);
		let y = parseInt(input[3]);
		let width = parseInt(input[4]);
		let height = parseInt(input[5]);
		//fillArr(arr, y, x, height, width);
		//console.log(x, y, width, height);
		//console.log(arr);
		//console.log(fillArr(arr, y, x, height, width, id));
		//console.log(id);
	//}
		arr = fillArr(arr, y, x, height, width, id);
});

lines.forEach(function(value, index) {
		let input = value.split(/#| @ |,|: |x/);
		let id = parseInt(input[1]);
		let x = parseInt(input[2]);
		let y = parseInt(input[3]);
		let width = parseInt(input[4]);
		let height = parseInt(input[5]);
		findNoOverlapID(arr, y, x, height, width, id);
});


function fillArr(arr, y, x, height, width, id) {
	let rangeX = Math.abs(width + x);
	let rangeY = Math.abs(height + y);

	for (var i = x; i < rangeX; i++) {
		for (var j = y; j < rangeY; j++) {
			if(arr[i][j] == 1) {
				arr[i][j] = 'x';
				overlaps++;
			} else if (arr[i][j] == 0) {
				arr[i][j] = 1;
			}
		}
	}
	return arr;
}

function findNoOverlapID(arr, y, x, height, width, id) {
	let rangeX = Math.abs(width + x);
	let rangeY = Math.abs(height + y);
	let hasOverlapOccured = false;

	for (var i = x; i < rangeX; i++) {
		for (var j = y; j < rangeY; j++) {
			if(arr[i][j] == 'x') {
				hasOverlapOccured = true;
			}
		}
	}
	if (!hasOverlapOccured) {
			console.log(id);
	}
}