let a = 5 != 7;
console.log(a);

// 3_22
{
  let x = 10;

  if(8 > x) {
    console.log("8 is greater!");
  } else if(15 > x) {
    console.log("15 is greaterer!");
  } else {
    console.log("8 is not that great...");
  }

  function isEven(number) {
    return number % 2 == 0;
  }

  console.log(isEven(6))
}
// 3_23
{
  let x = 13;

  switch (x) {
    case 1:
    console.log("The number is one!");
    break;
    case 2:
    console.log("The number is two");
    break;
    case 3:
    console.log("The number is three");
    break;
    default:
    console.log("The number is " + x);
  }
}
// 3_24

{
  for (let i = 0; i < 100; i++) {
  console.log("I love you~ times " + (i+1));
}

let names = ["Frodo", "Sam", "Merry", "Pippin"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
}

// 3_25
{
  let names = ["Frodo", "Sam", "Merry", "Pippin"];
  let i = 0;
  while (i < names.length) {
    console.log(names[i]);
    i++;
  }

  let j = 0;
  do {
    console.log(names[j]);
    j++;
  } while (j < names.length)
}
