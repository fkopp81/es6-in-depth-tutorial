// Arrow functions are anonymous
// function() {} <- old | es7 -> () => {}

// function cheer() {} <- function declaration (non-anon)
// Function expression (anonymous)
// let cheer = function() {
//   console.log("Woohoo!");
// }
//
// cheer();

// setTimeout(function() {console.log("Woohoo!");}, 3000);

setTimeout(() => {
console.log("Delayed => Woohoo!");
}, 3000);

let cheer = () => {
console.log("=> Woohoo!");
};
cheer();
