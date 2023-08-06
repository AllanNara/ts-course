"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super fuerza"],
        getName() { return this.name; }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Allan",
        age: 24,
        address: {
            id: 234,
            zip: "JG4 SGD",
            city: "Bariloche"
        },
        getFullAddress() {
            return this.address.id.toString();
        }
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        address: {
            city: "Toronto",
            id: 263,
            zip: "SD2 HG4"
        },
        getFullAddress() {
            return this.address.id.toString();
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map