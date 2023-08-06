(() => {


  interface addTwoNumbers {
    (a: number, b: number): number;
  }


  let addNumbersFunction: addTwoNumbers;


  addNumbersFunction = (a: number, b: number): number => {
    return a + b
  }

  // console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")

  // console.log(addNumbersFunction(10, 20))

  // console.log("\n")

})()