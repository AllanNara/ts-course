import powers, { Power } from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power() {
    let powerExist: Power | undefined 
    powerExist = powers.find((power: Power) => power.id === this.powerId)
    if(powerExist) {
      return powerExist.desc
    }
    return "not found"
  }
}