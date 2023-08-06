(() => {


  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string
    ) {}
  }

  class Xmen extends Mutante {

    public salvarMundo(): string {
      return "¡Mundo a salvo!"
    }

  }
  class Villian extends Mutante {

    public conquistarMundo(): string {
      return "¡Mundo conquistado!"
    }
  }

  // !! Error !! No se puede crear una instancia a partir de una clase abstracta en TS
  // const mutante = new Mutante("Este es un mutante", "Yeeei")
  const wolverine = new Xmen("Wolverine", "Logan")
  const magneto = new Villian("Magneto", "Magnus")
  
  // console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
  // console.log(wolverine)
  // console.log(wolverine.salvarMundo())
  // console.log(magneto)
  // console.log(magneto.conquistarMundo())

  const printName = (character: Mutante): void => {
    console.log(character.realName)
  }

  // printName(magneto)

  console.log("\n")

})()