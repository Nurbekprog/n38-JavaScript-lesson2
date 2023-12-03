//HOMEWORK 2 | NURBEK YULDASHEV

// Boolean1

// let A = 10;

// let res = A % 2 == 0;

// console.log(res);

// Boolean2

// let A = 1;
// let B = 2;

// let res = A >= 0 || B < -2;

// console.log(res);

// Boolean3

// let A = 2;
// let B = 3;
// let C = 4;

// let res = A < B && B < C;

// console.log(res);

// Boolean4

// let A = 5;
// let B = 3;

// let res = A % 2 == 1 && B % 2 == 1;
// console.log(res);

// Boolean5

// let A = 3;
// let B = 3;

// let res = A % 2 == 1 || B % 2 == 1;

// console.log(res);

// Boolean6

// let X = 3;
// let Y = 6;

// let res = (X % 2 == 0 && Y % 2 == 1) || (X % 2 == 1 && Y % 2 == 0);

// console.log(res);

// Boolean7

// let A = 1;
// let B = 3;
// let C = 2;

// let res = A >= 0 && B >= 0 && C >= 0;

// console.log(res);

// Boolean8

// let X = -2;
// let Y = 1;
// let Z = -3;

// let res =
//   (X > 0 && Y < 0 && Z < 0) ||
//   (X < 0 && Y > 0 && Z < 0) ||
//   (X < 0 && Y < 0 && Z > 0);

// console.log(res);

// Boolean9

// let X = 3;
// let Y = 1;
// let Z = -2;

// let res =
//   (X > 0 && Y < 0 && Z > 0) ||
//   (X < 0 && Y > 0 && Z > 0) ||
//   (X > 0 && Y > 0 && Z < 0);

// console.log(res);

// Boolean10

// let A = 20;

// let res = A >= 10 && A <= 100 && A % 2 == 0;

// console.log(res);

// Boolean11

// let A = 123;

// let res = A >= 100 && A < 1000 && A % 100 == 1;

// console.log(res);

// Boolean12

// let A = 1;
// let B = 2;
// let C = -2;

// let res = A + B == 0 || B + C == 0 || A + C == 0;

// console.log(res);

// Boolean13

// let abc = 234;
// c = abc % 10;
// a = (abc - (abc % 100)) / 100;
// b = ((abc - c) % 100) / 10;

// let res = a < b < c ;

// console.log(res);

// Boolean14

// let abc = 987;
// c = abc % 10;
// a = (abc - (abc % 100)) / 100;
// b = ((abc - c) % 100) / 10;

// let res = a < b && b < c && a < c || a > b && b > c && a > c;

// console.log(res);

// Boolean15

// let abc = 999;
// c = abc % 10;
// a = (abc - (abc % 100)) / 100;
// b = ((abc - c) % 100) / 10;

// let res = a == b && b == c && a == c;

// console.log(res);

// EXAMPLES

// EXP 1

// let A = 2;
// let B = 3;

// let Y1 = B / 2;
// let Y2 = A ** 2 + B ** 2;
// let Y = -Y1 * Y2;

// console.log(Y);

// EXP 2

// let A = 1;
// let B = 2;
// let C = 3;
// let D = 4;

// let Y1 = ((A + B) / (C + D)) ** 2;
// let Y2 = B ** 2

// let Y = Y1 + Y2;
// console.log(Y);

// EXP 3

// let A = 1;
// let C = 3;
// let D = 2;

// let Y1 = A ** D;
// let Y2 = ((4*C) ** 2 ) / 3;
// let Y = 2*(Y1 + Y2);

// console.log(Y);

// EXP 4

// let A = 1;
// let B = 2;
// let C = 3;
// let D = 4;

// let Y1 = 1 / ( A ** 2);
// let Y2 = (B / 10) ** 3;
// let Y3 = (C + D) ** 2;
// let Y = Y1 * Y2 * Y3;

// console.log(Y);

// EXP 5

// let A = 1;
// let B = 2;
// let C = 3;
// let D = 4;

// let Y1 = A / B - 1;
// let Y2 = C / ( D - 1);
// let Y = (Y1 / Y2) ** 2;

// console.log(Y);

// EXP 6

// let A = 1;
// let B = 2;
// let C = 3;
// let D = 4;

// let Y1 = A + B;
// let Y2 = C + ( D / ( A + C));
// let Y = Y1 / Y2;

// console.log(Y);

// EXP 7

// let A = 1;
// let B = 2;
// let C = 3;

// let Y1 = (A + B + C) ** 2;
// let Y2 = (A - B - C) ** 2;
// let Y = (Y1 - Y2) ** (1/2);

// console.log(Y);

// EXP 8

// let A = 1;
// let B = 2;
// let C = 3;

// let Y1 = ((A)**2) + ((B)**2) + ((C)**2);
// let Y2 = A*B*C;
// let Y = Y1/Y2;

// console.log(Y);

// EXP 9

// let A = 1;
// let B = 2;
// let C = 3;
// let D = 4;

// let Y1 = A * ((D**3) / 3);
// let Y2 = B*((C**2) / 2);
// let Y = Y1+Y2;

// console.log(Y);

// EXP 10

let A = 1;
let B = 2;
let C = 3;
let D = 4;

let Y1 = Math.abs(A/B - B/C);
let Y2 = (A + C)**(1/4);
let Y = Y1+Y2;

console.log(Y);
