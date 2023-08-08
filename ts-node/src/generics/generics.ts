export const printObject = (argument: any): void => {
	console.log(argument);
};


export function genericFuncion<T>(argument: T): T {
  return argument
}

export const genericFuncionArrow = <T>(argument: T) => argument