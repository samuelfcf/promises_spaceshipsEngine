import "core-js"
import "regenerator-runtime"

import Spaceship from "./spaceship"
import SpaceshipEngine from "./spaceshipEngine"

const sophia = new Spaceship("Sophia", 10, 5, 70)
const amsterda = new Spaceship("Amsterdan", 14, 10, 40)
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4, 80)

const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdaEngine = new SpaceshipEngine(amsterda)
const dwarfStartEngine = new SpaceshipEngine(dwarfStart)

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()

console.log("promises")