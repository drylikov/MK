const FirstName = 'Denis';


console.log(typeof FirstName);

const count = 5;

console.log(typeof count);

const infinity = 5 / 0;
const NotANumber = 10 * 'as';
console.log(infinity);
console.log(typeof infinity);
console.log(NotANumber);
console.log(typeof NotANumber);

const isBoolean = false;
console.log(typeof isBoolean);

const symbol = Symbol();
console.log(typeof symbol);

const bigint = BigInt (3);
console.log(typeof bigint);

let someVariable;
console.log (typeof someVariable);

let someNull = null;
console.log (typeof someNull);

const obj = {};
console.log(typeof obj);

const arr = [];
const fn = function() {};
console.log (typeof arr);
console.log (typeof fn);

console.log(typeof String(8));

console.log('Hello' + 'World');
const hello = 'Hello';
const World = 'World';
const concat = 'Hello' + 'World';
console.log(concat + 9);


console.log(Number('5'));
console.log(Number('asd'));

console.log(typeof +'5')

console.log(+true);
console.log(+false);
console.log(+null);

console.log(Boolean(''));
console.log(Boolean(' '));

console.log(Boolean('0'));
console.log(Boolean(null));

console.log(!!'asd');

console.log(''+5);
console.log(+'10');
console.log(!!'someString');
