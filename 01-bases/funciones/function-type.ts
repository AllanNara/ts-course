(() => {

  const addNumbers = (a: number, b: number) => a + b  
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta salvado`

  let myFunction: (y: number, z: number) => number;

  // myFunction = 10;

  // ** cumple!!
  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  // !! no cumple
  // myFunction = greet;
  // console.log(myFunction("Allan"));
  
  // !! no cumple
  // myFunction = saveTheWorld;
  // console.log(myFunction());
  

})()