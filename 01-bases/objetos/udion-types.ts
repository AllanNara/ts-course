(() => {

  type Hero = {
    name: string, 
    age?: number,
    powers: Array<number>,
    getName?: () => string,
  }

  let myCustomVariable: (string | number | Hero) = "Allan";

  console.log({myCustomVariable})
  console.log(typeof myCustomVariable)

  myCustomVariable = 500;
  console.log({myCustomVariable})
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Bruce",
    age: 43,
    powers: [1]
  }
  console.log({myCustomVariable})
  console.log(typeof myCustomVariable)

  

})()