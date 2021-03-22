export default class SpaceshipEngine {
  constructor(spaceship){
    this.spaceship = spaceship
  }

  checkCurrentCharge() {
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceship.currentChargeInPercent()

      if(currentCharge >= 30) {
        resolve(currentCharge)
      } else reject(currentCharge)
    })
  }

  turnOn() {
    this.checkCurrentCharge().then(currentCharge => {
      console.log(`(${this.spaceship.name}) Partida autorizada: carga atual em ${currentCharge}`)
    }).catch(currentCharge => {
      console.log(`(${this.spaceship.name}) Partida não autorizada: carga com apenas ${currentCharge}`)
    })
  }

}
