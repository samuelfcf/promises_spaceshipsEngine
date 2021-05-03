export default class Spaceship {
  constructor(name, chargeCapacity, currentCharge, shield) {
    this.name = name
    this.chargeCapacity = chargeCapacity
    this.currentCharge = currentCharge
    this.shield = shield
  }

  currentChargeInPercent() {
    return (this.currentCharge * 100 / this.chargeCapacity)
  }
}