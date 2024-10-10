const someFunction = (number) => {
  if (number % 4 === 0) {
    console.log("This is a leap year");
  } else {
    console.log("This is not a leap year");
  }
};

someFunction(1995);
someFunction(2015);
someFunction(2004);
