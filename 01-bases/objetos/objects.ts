(() => {

  let flash: { name: string, age?: number, powers: Array<string>, getName?: () => string} = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"]
  }

  let superman: { name: string, age?: number, powers: Array<string>, getName?: () => string} = {
    name: "Clark Kent",
    age: 60,
    powers:  ["Super fuerza"]
  }
  
  // flash = {
  //   name: "Clark Kent",
  //   // age: 60,
  //   powers: ["Super fuerza"],
  //   // !! Rompe con la estructura inicial (hasta que lo agrege)
  //   // getNombre agregado
  //   getName() { return this.name }
  // }

  // console.log({flash});
  

})()