import { genericFuncion, genericFuncionArrow, printObject } from "../generics/generics";
import { Hero, Villain } from "../interfaces";

// printObject(1234);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8]);
// printObject("Hola Mundo!");

// console.log(genericFuncion(3.141618).toFixed(2))
// console.log(genericFuncion(new Date()).getDate())
// console.log(genericFuncion("Hola Mundo").charAt(1))

const deadpool = {
  name: "Deadpool",
  realName: "Wade Windston Wilson",
  dangerLevel: 130
}

console.log(genericFuncionArrow<Villain>(deadpool).dangerLevel)