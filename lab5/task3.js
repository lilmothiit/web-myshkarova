function joinWithOverlap(words)
{
	var minoverlap = 100;
	var result = words[0];

	for(var i = 1; i < words.length; i++)
	{
		var j = 1;
		//console.log(words[i-1],": ",words[i].slice(0,j));
		while (!words[i-1].endsWith(words[i].slice(0,j))) j++;
		if (j < minoverlap) minoverlap = j;

		result = result.slice(0,-j);
		result += words[i];
	}
	//console.log("overlap = ",overlap);

	return [result, minoverlap];
}

console.log(joinWithOverlap(["oven", "envier", "erase", "serious"]));
console.log(joinWithOverlap(["move", "over", "very"]));
console.log(joinWithOverlap(["to", "ops", "psy", "syllable"]));
