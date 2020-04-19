function JoinWithOverlap(words)
{
	var overlap = 100;
	for(var i = 1; i < words.length; i++)
	{
		var j = 0;
		while(words[i-1][-j] == words[i][j]) j++;
		if (j < overlap) overlap = j;
	}

	var result = "";
	for word in words
	{
		if
		result.slice(,-overlap);
		result += word;
	}
	return [result, overlap];
}

console.log(JoinWithOverlap(["oven", "envier", "erase", "serious"]));
console.log(JoinWithOverlap(["move", "over", "very"]));
console.log(JoinWithOverlap(["oven", "envier", "erase", "serious"]));
) ➞ ["ovenvieraserious", 2]

join() ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]
