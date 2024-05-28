/* 
  Type Inference
 */

let text = 'hello';
text = 11;

function print(message) {
  console.log(message);
}

function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 2);
