var arr = [48, 30, 35, 3, 17],
	arrLenght = arr.length;
for (var i = 0; i < arrLenght; i++) {
	var index = 0;
	for (var j = 1; j < arrLenght - i; j++) {
		if (arr[j] > arr[index]) index = j;
	}
	var temp = arr[arrLenght - i - 1];
	arr[arrLenght - i - 1] = arr[index];
	arr[index] = temp;
}
console.log(arr); //[3,17,30,35,48]

//原理是逐个检测,最大的往最后丢！每次减少一次检测!


