// var Fun = function () {
//   this.a = "a";
//   this.b = "b";
//   this.c = {
//     a: "a+",
//     b: () => this.a
//   }
// }

// console.log(new Fun().c.b());


// var a ;
// if (a) {
//   let a = 20;
// }else{
//   let a = 30;
// }
// console.info('a', a)

let data = [5,10,15,20];
let res = data.map(value=>value*2).filter(value=>value>=20).reduce((acc,c)=>acc+c);

console.info('res', res)