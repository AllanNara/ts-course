(() => {

  
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id?: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string
  }

  const client: Client = {
    name: "Allan", 
    age: 24,
    address: {
      id: 234,
      zip: "JG4 SGD",
      city: "Bariloche"
    },
    getFullAddress() {
      return this.address.id.toString()
    }
  }

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      city: "Toronto",
      id: 263,
      zip: "SD2 HG4"
    },
    getFullAddress() {
      return this.address.id.toString()
    }
  }

  // console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")

  // console.log(client)
  // console.log(client.getFullAddress())
  // console.log("\n")
  // console.log(client2)

  // console.log("\n")

})()