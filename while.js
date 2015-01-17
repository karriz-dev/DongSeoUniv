function outer(){
	var x=0;
	var inner = function(){
		return ++x;
	}
	return inner;
}
var x = -1;
var f = outer();
console.log(f());
console.log(f());
console.log(f());