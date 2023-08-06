(() => {

  
  class Apocalipsis {

    static instance: Apocalipsis;
   
    private constructor(public name: string) {};

    // ** Principio Singleton (SOLID)
    static callApocalipsis(): Apocalipsis {
      if(!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el único")
      }

      return Apocalipsis.instance
    }

    changeName(newName: string): void {
      this.name = newName
    }
   
  }

  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")

  // const apocalipsis1 = new Apocalipsis("Soy Apocalipsis1... el único")
  // const apocalipsis2 = new Apocalipsis("Soy Apocalipsis2... el único")
  // const apocalipsis3 = new Apocalipsis("Soy Apocalipsis3... el único")
  // console.log(apocalipsis1, apocalipsis2, apocalipsis3)

  // const apocalipsis = Apocalipsis.callApocalipsis();
  // const apocalipsis1 = Apocalipsis.callApocalipsis();
  // const apocalipsis2 = Apocalipsis.callApocalipsis();
  // const apocalipsis3 = Apocalipsis.callApocalipsis();
  // console.log(apocalipsis);
  // console.log(apocalipsis1);
  
  // apocalipsis1.changeName("Volcan!!!")

  // console.log(apocalipsis2);
  // console.log(apocalipsis3);

  console.log("\n")
  
})()