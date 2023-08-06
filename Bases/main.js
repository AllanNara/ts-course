"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "¡Mundo a salvo!";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "¡Mundo conquistado!";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (character) => {
        console.log(character.realName);
    };
    console.log("\n");
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() { return this.name; }
        bio() { return `${this.name} (${this.team})`; }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado!\n");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen Llamado!\n");
        }
        get fullName() {
            if (this.name === "Allan")
                return "¡Es muy buena practica utilizar seters y getters!";
            return `${this.name} ${this.realName}\n`;
        }
        set fullName(name) {
            if (name === name.toUpperCase())
                throw new Error(`El nombre esta en su totalidad en mayusculas`);
            this.name = name;
        }
        getFullNameDesdeXmen() {
            return super.getFullName();
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        ;
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis... el único");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log("\n");
})();
//# sourceMappingURL=main.js.map