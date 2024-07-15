let a = null;
console.log(typeof(null)); //object
console.log(typeof(undefined)) ;//undefined

console.log(null == undefined); //true

console.log(null === undefined);//false

console.log(isNaN(null)) //return false;

console.log(null == 0);//false

console.log(null == false);//false

console.log(undefined == 0);//false

console.log(undefined == false);//false

console.log(null !== undefined);//true

console.log(isNaN(undefined));//true

console.log(null == null);//true

console.log(!null);//true

var exp=null;
var base=2;
console.log(base**exp);//2**0=1

function areaFunction(l,b,h) {
    var area =l*b*h;
    console.log(area);//NaN 
    console.log(h);//undefined
  }
  areaFunction(19,78);

//   null !== undefined but null == undefined.






