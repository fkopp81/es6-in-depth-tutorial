function count(x) {
  var numbers = [];
  if (x % 2 === 0) { // TODO check that x is even
    for (let i = 0; i < x; i+=2) { // TODO assign i to 0; give i the limit of x; and increment by 2
      numbers.push(i);
    }
  } else {
    for ( let i = 1; i < x; i+= 2) { // TODO assign i to 1; give i the limit of x; and increment by 2
      numbers.push(i);
    }
  }
  return numbers;
}
