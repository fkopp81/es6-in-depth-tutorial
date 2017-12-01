function hello() {
  let message = "Hi!";
  console.log(message);
}

function greeting() {
  let message = "How are you?";
  console.log(message);
}

hello();
greeting();

const limit = 200;

{
  const limit = 10;
  console.log("backstage limit", limit);
}

console.log("overall venue limit", limit);
