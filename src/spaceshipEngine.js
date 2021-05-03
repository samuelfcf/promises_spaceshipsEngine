export default class SpaceshipEngine {
  constructor(spaceship) {
    this.spaceship = spaceship
  }

  async checkCurrentCharge() {

    let currentCharge = this.spaceship.currentChargeInPercent()

    if (currentCharge < 30) {
      return Promise.reject(`Carga em apenas ${currentCharge}GJ`)
    }
    return currentCharge

  }

  async turnOn() {
    try {
      let currentChargeCheking = this.checkCurrentCharge()
      let shieldChecking = this.testShield()
      let results = await Promise.all([currentChargeCheking, shieldChecking])
      
      this.spaceship.shield = await this.shieldNormalizer(results[1])
     
      console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield})- Carga (${this.spaceship.currentCharge}GJ)`)

    } catch (err) {
      console.log(`Partida nao autorizada: ${err}`)
    }

  }

  async testShield() {

    let doubleShield = this.spaceship.shield * 2

    if (doubleShield < 100) {
      return Promise.reject("Escudo em sobrecarga")
    }
    return doubleShield

  }

  async shieldNormalizer(shield) {
    let normalizedShield = shield * 0.7

    if (normalizedShield > 120) {
      return Promise.reject("Escudo em supercarga")
    }
    return normalizedShield
  }

}