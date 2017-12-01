document.getElementById('example').innerHTML = "Javascript rules!";

var a, b; // variables
a = 'hello'; // statements
b = a + "world";
// b = 'hello world'

a = 1; // string
b = a + 5.5;

/* comment on multiple lines
// b = 6.5;
*/

var c = 30; // c: identifier
/* Rules for identifiers
var var = 30; // don't reuse keywords
var 1a = 30; // have to start with letter, _ or $
var $_a = 30; // works
var first greeting = 30; // no whitespace
var first_greeting = 30;
var firstGreeting = 30;
*/

/* Operators */

var z = 10 + 4 - 2;
console.log(z);
var z = 10 * 4 / 2;
console.log(z);
var a = "Good " + "day";
console.log(a);
var z = 11 % 3; // Great for odds and evens
console.log(z);
