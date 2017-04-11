var row = 8,
	arry = new Array();
for (var i = 0; i < row; i++) {
	var arrySon = [];
	for (var j = 0; j < i + 1; j++) {
		if (i == 0 || j == 0 || j == i) {
			arrySon.push(1);
		} else {
			arrySon.push(arry[i - 1][j - 1] + arry[i - 1][j]);
		}
	}
	console.log(arrySon);
	arry.push(arrySon);
}
//[1]
//[1, 1]
//[1, 2, 1]
//[1, 3, 3, 1]
//[1, 4, 6, 4, 1]
//[1, 5, 10, 10, 5, 1]
//[1, 6, 15, 20, 15, 6, 1]
//[1, 7, 21, 35, 35, 21, 7, 1]
