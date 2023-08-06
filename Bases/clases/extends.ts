(() => {

  class Avenger {
    constructor(
      public name: string,
      public realName?: string
    ) {
      console.log("Constructor Avenger llamado!\n")
    }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`
    }

  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ){
      super(name, realName);
      console.log("Constructor Xmen Llamado!\n");
    }

    get fullName(): string {
      if(this.name === "Allan") 
        return "¡Es muy buena practica utilizar seters y getters!"
      return `${this.name} ${this.realName}\n`
    }

    set fullName(name: string) {
      if(name === name.toUpperCase())
        throw new Error(`El nombre esta en su totalidad en mayusculas`)
      this.name = name;
    }

    getFullNameDesdeXmen():string {
      return super.getFullName()
    }
  }

  // const wolverine = new Xmen("Wolverine", "Logan", true)
  // console.log(wolverine)
  // console.log(wolverine.getFullNameDesdeXmen())
  // console.log(wolverine.fullName)
  
  // wolverine.fullName = "Allan"

  // console.log(wolverine.fullName)


})()