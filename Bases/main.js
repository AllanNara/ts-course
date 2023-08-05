"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit",
        power: 100
    };
    const captainAmerica = {
        name: "Captain America",
        weapon: "Escudo",
        power: 80
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
        power: 150
    };
    const avengers = [ironman, thor, captainAmerica];
})();
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.12345
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, rest = __rest(_a, ["ironman"]);
        console.log({ ironman }, { rest });
    };
    const avengersArr = ["Cap. America", true, 150.15];
    const [primero, , tercero] = avengersArr;
})();
(() => {
    const nombre = 'Allan';
    const getName = function () {
        console.log(`${nombre}`);
    };
})();
//# sourceMappingURL=main.js.map