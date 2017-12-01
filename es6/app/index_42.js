// let a = [20, 30, 40];
// let b = [10, ...a, 50];
// console.log(b);

let a = ["Dana", "Eric", "Frank"];
let b = ["Alice", "Bob", "Carl", ...a]
// console.log(b);

function collect(...a) {
  console.log(a);
}

collect(...b);
collect(3,6,9,12,15);
