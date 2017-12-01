// Arrow functioons and helper methods

let values = [20, 30, 40];

let double = (a) => {
return a*2;
};

let doubled = values.map(double);
console.log(doubled);

// Shorter. Notice lack of {}, return and ;
console.log(values.map((a) => a*2));

// --- Filter helper method

let points = [7, 16, 21, 4, 3, 22, 5];

let highscores = points.filter((a) => a > 15);
console.log(highscores);
