var arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

function getIndex(list,num) {
	var len = list.length,
		st = 0,end = len - 1;
	while (st <= end) {
		var mid = Math.floor((st + end)/2);
		if (num == list[mid]) {
			return mid;
		}else if (num > mid) {
			st = mid + 1;
		}else{
			end = mid - 1;
		}
	}
	return - 1;
}
console.log(getIndex(arr,5));   //5
//就是不断折半~~查看当前值对于检索值的大小判断 只能对已经排序好的数组