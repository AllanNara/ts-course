(() => {

  const fullName = (firstName:string, lastName?:string, upper:boolean = false): string => {
    if(upper) {
      return `${firstName} ${lastName || "--noLastName--"}`.toUpperCase()
    } else {
      return `${firstName} ${lastName || "--noLastName--"}`
    }
  }


  const name = fullName("Tony", undefined, true)

  console.log({name});
  
})()