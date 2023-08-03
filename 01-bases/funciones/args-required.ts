(() => {

  const fullName = (firstName:string, lastName:string): string => {
    // return 1
    return `${firstName} ${lastName}`
  }

  let noName: any;

  const name = fullName(noName, "Stark")

  console.log({name});
  
})()