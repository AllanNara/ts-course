(() => {

  type Avenger = {
    name: string;
    weapon: string;
    power: number;
  };

  const ironman: Avenger = {
    name: "Ironman", 
    weapon: "Armorsuit",
    power: 100
  };

  const captainAmerica: Avenger = {
    name: "Captain America", 
    weapon: "Escudo",
    power: 80
  };

  const thor: Avenger = {
    name: "Thor", 
    weapon: "Mjolnir",
    power: 150
  };

  const avengers: Array<Avenger> = [ ironman, thor, captainAmerica ]

  // !! iterar con for
  // for (let i = 0; i < avengers.length; i++) {
    //   const element = avengers[i];
    //   console.log(element)
    // }
    
  // ** iterar con for of en ES6
  // for (const { name, ...rest } of avengers) {
  //   console.log({ name, info: rest })
  // }

})()