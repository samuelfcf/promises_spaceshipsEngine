export default class Spaceship {
  constructor(name, chargeCapacity, currentCharge) {
    this.name = name
    this.chargeCapacity = chargeCapacity
    this.currentCharge = currentCharge
  }

  currentChargeInPercent() {
    return (this.currentCharge * 100 / this.chargeCapacity)
  }
}