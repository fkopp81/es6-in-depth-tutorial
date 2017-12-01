// Objects
let dog = {
  name: "Buddy",
  breed: "Golden Retriver",
  weight: 60,
  bark: function () {
    console.log("Bark!");
  }
};

console.log(dog);
console.log(dog.breed);
console.log(dog["breed"]);
dog.bark();
