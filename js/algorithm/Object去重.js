var a = [1,2,5,6.2],
	b = [2,4,7],
	c = a.concat(b);
	obj = {},
	arr = [];
c.map(function(item) {
	obj[item] = null;
})

for (var key in obj) {
	arr.push(Number(key));
}

console.log(arr);
//[1,2,4,5,7,6,2]