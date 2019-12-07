const hsvToRgb = require('./hsvToRgb')
const rgbToHex = require('./rgbToHex')
const goldenRatio = 0.618033988749895

let randomSeed;

seedRandom();

function seedRandom() {
  randomSeed = Math.random()
}

function getRgb (inputs = {}) {
  let { hue, saturation, value } = inputs
  if (typeof hue === 'undefined') {
    randomSeed += goldenRatio
    randomSeed %= 1
    hue = randomSeed
  }

  if (typeof saturation !== 'number') saturation = 0.5
  if (typeof value !== 'number') value = 0.95

  return hsvToRgb(hue, saturation, value)
}

function getHex (opts, inputs) {
  const rgb = getRgb(opts, inputs)
  return rgbToHex(rgb)
}

getHex.reSeed = seedRandom

module.exports = getHex
