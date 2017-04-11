//原理在于逐个双双检测,交换两两之间的大小关系,
//其实最终的目的也是逐轮把最大数丢最后面.

var arr = [48,30,35,3,17];
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length-i-1; j++) {
		if (arr[j] > arr[j+1]) {
			var temp = arr[j+1];
			arr[j+1] = arr[j];
			arr[j] = temp;
		}
	}
};
console.log(arr);