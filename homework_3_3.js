const someFunction = (number) => {
  let lastNumber = number % 10;
  if (lastNumber === 1) {
    console.log(`Вам${number}год`);
  } else if (lastNumber > 1 && number < 5) {
    console.log(`Вам${number}года`);
  } else {
    console.log(`Вам${number}лет`);
  }
};

someFunction(1);
someFunction(3);
someFunction(20);
