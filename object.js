
/*
function Member(name) {
	var privatecode = "1111";
	this.name = name;
	this.getprivateCode = function(){
		return this.name+privatecode;
	};
};
Member.prototype.expire = function() {
	this.expire=true;
};
Member.name = "korea Member";

var MemberA = new Member("jay");
var MemberB = new Member("tom");

console.log(MemberA);
console.log(MemberA.getprivateCode());
console.log(MemberB);
console.log(MemberB.getprivateCode());



*/


// a.b.c 사용 하는 방법 
/*
var a={};

a.b={};
a.b.c=3;

if(a.b.c === 3){
	console.log("abc");
};*/


function outer () {
	var _x=0;
	function _privateA () {
		return ++_x;
	}
	function _privateB() {
		return (_x += 2);
	}
	return {publicA:_privateA,publicB:_privateB};
}

var o = outer();
o.publicA();
o.publicB();
