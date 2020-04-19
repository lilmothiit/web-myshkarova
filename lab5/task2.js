function isWristband(b)
{
	console.log("\n\nFunction Output:");
	var blen = b[0].length;
	//console.log("blen = ",blen);
	//console.log("i	 j");

	var row=true, col=true, diagl=true, diagr=true;
	for (var i = 0; i < b.length; i++)
	{
		//console.log(i);
		for (var j = 0; j < blen; j++)
		{
			//console.log("	",j);
			if((j>0) && (row === true) && (b[i][j] !== b[i][j-1])) row = false;
			if((i>0) && (col === true) && (b[i][j] !== b[i-1][j])) col = false;
			if((diagr === true) && (b[i][j] !== b[j][i])) diagr = false;
			if((i>0 && j>0) && (diagl === true) && (b[i][j] !== b[i-1][j-1])) diagl = false;
		}
	}

	if(row) return "Part of horizontal wristband.";
	if(col) return "Part of vertical wristband.";
	if(diagl) return "Part of diagonal left wristband.";
	if(diagr) return "Part of diagonal right wristband.";
	return "Not a part of a wristband";
}

var bRow = [
	[1,1,1],
	[2,2,2],
	[3,3,3]
];


var bCol = [
	[1,2,3],
	[1,2,3],
	[1,2,3]
];

var bDiagl = [
	[1,2,3],
	[3,1,2],
	[2,3,1]
];

var bDiagr = [
	[1,2,3],
	[2,3,1],
	[3,1,2]
];

var notABand = [
	[1,1,3],
	[2,4,2],
	[3,2,1]
];

console.log(isWristband(bRow));
console.log(bRow);

console.log(isWristband(bCol));
console.log(bCol);

console.log(isWristband(bDiagl));
console.log(bDiagl);

console.log(isWristband(bDiagr));
console.log(bDiagr);

console.log(isWristband(notABand));
console.log(notABand);
