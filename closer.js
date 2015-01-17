/*
function Person(name){
	this.name=name;
	this.setAge = function(age){
		this.age=age;
	}
}

var me = new Person("동현");
me.setAge(21);
console.log(me);

var you = new Person("상원");
you.setAge(50);
console.log(you);
you.age = 299;
console.log(you);
*/

/*
function PrivatePerson(name,age){
	var age = age || 0;
	var name = name || "홍길동";
	return function (){
		return {
			setAge : function(age){
				age=age;
			},
			setName : function(name){
				name=name;
			},
			getAge : function(){
				return age;
			},
			getName : function(){
				return name;
			}
		}
	}
}

var me = PrivatePerson("동현",21)();
var you = PrivatePerson("도협",23)();

console.log(me);
console.log(me.age);
console.log(me.getName());

console.log(you);
console.log(you.name);
console.log(you.getName());
console.log(getAge());
*/

function Member (n) {
	var privateCode="1111",
		name = n,
	getprivateCode = function() {
		return name + " : " + privateCode;
	},
	getName = function() {
		return name;
	};
	return {
		getName:getName,
		getprivateCode:getprivateCode
	}
}

var MemA = Member("donghyeun");
console.log(MemA);
console.log(MemA.getprivateCode());

var MemB = Member("jinwoo");
console.log(MemB);
console.log(MemB.getprivateCode());

console.log(MemB.constructor);
