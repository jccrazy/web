//但其实在javascript中有已经有封装好处理类似数组的方法:

var arr = [48,30,35,3,17];
//正序
console.log(arr.sort(function(a,b) {
	return a-b;  //[3,17,30,35,48]
}));
//反序
console.log(arr.sort(function(a,b) {
	return b-a;  //[48,35,30,17,3]
}));