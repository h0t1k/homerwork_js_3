const someFunction = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log("Try another number");
  }
};

someFunction(3);
someFunction(5);
someFunction(15);
