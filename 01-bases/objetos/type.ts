(() => {

  type Hero = {
    name: string, 
    age?: number,
    powers: Array<string>,
    getName?: () => string,
  }

  let flash: { name: string, age?: number, powers: Array<string>, getName?: () => string} = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"]
  }

  let superman: { name: string, age?: number, powers: Array<string>, getName?: () => string} = {
    name: "Clark Kent",
    age: 60,
    powers:  ["Super fuerza"],
    getName() { return this.name }
  }
  

})()