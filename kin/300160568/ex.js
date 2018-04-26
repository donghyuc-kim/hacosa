function Person(name){
  this.name = name;
  this.introduce = function(){
    return 'My name is '+this.name;
  }
}

Person.prototype.name=null;
Person.prototype.introduce=null;
// }

function Programmer(name){
  this.name = name;
}

Programmer.prototype = new Person();
var p1 = new Programmer('egoing');


console.log(p1);
console.log(p1.introduce());