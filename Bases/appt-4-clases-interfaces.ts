// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean,
  velocidadMaxima: number,
  acelerar(): void
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Accion {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason: Accion = {
  reir: true,
  comer:true,
  // llorar:false
}

const reir = ( guason: Accion ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFn {
  (ciudadanos: string[]): number
}

const ciudadGotica: CiudadGoticaFn = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

type Sexo = "masculino" | "femenino" | "otro";
type Estado = "soltero" | "casado" | "concubinato";

interface PersonaInterface {
  nombre: string,
  edad: number,
  sexo: Sexo,
  estadoCivil: Estado,
  imprimirBio(): void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona {
  public nombre: string;
  public edad: number;
  public sexo: Sexo;
  public estadoCivil: Estado;
  imprimirBio() {}
}