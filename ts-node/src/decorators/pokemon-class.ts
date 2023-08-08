function printToConsole(constructor: Function) {
	console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
	if (print) {
		return printToConsole;
	} else {
		return () => {};
	}
};

const blockPrototype = function (constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
};

function CheckValidPokemonId(): Function {
	return function (target: any, methodKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;
		descriptor.value = (id: number) => {
			if (id < 1) {
				return console.error("Id invalido: menor a 1");
			} else if (id > 800) {
				return console.error("Id invalido: mayor a 800");
			} else {
				originalMethod(id);
			}
		};
	};
}

function readOnly(isWritable: boolean = true): Function {
	return function (target: any, propertyKey: string) {
		const descriptor: PropertyDescriptor = {
			get() {
				// console.log({ getDeReadOnly: this });
				// return "Allan";
			},
			set(this, val) {
				// console.log({ setDeReadOnly: this });
				// console.log(this, val);
				Object.defineProperty(this, propertyKey, {
					value: val,
					writable: !isWritable,
					enumerable: false
				})
			},
		};
		return descriptor;
	};
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
	@readOnly(false)
	public publicApi: string = `https://pokeapi/co`;
	constructor(public name: string) {}

	@CheckValidPokemonId()
	savePokemonToDB(id: number): void {
		console.log(`Pokemon save to DB: ${id}`);
	}
}
