(() => {

  const fullName = (firstName: string, ...restArgs: Array<string>): string => {
    return `${firstName} ${restArgs.join(" ")}`
  }


  const superman = fullName("Clark", "Joseph", "Kent", "Herrera")

  console.log({ superman });
  

})()