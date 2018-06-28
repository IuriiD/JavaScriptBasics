let hello = '{"one": 5}';

console.log(hello);
console.log(typeof hello);

console.log();

let another = JSON.parse(hello);
console.log(another);
console.log(typeof another);

console.log(another['one']);

let again = JSON.stringify(another);
console.log(again);
console.log(typeof again);
