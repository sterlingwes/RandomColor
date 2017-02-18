const hsvToRgb = require('./hsvToRgb')
const rgbToHex = require('./rgbToHex')
const goldenRatio = 0.618033988749895

function getRgb (inputs = {}) {
  let { hue, saturation, value } = inputs
  if (!hue) hue = Math.random()
  hue += goldenRatio
  hue %= 1

  if (typeof saturation !== 'number') saturation = 0.5
  if (typeof value !== 'number') value = 0.95

  return hsvToRgb(hue, saturation, value)
}

function getHex (opts, inputs) {
  const rgb = getRgb(opts, inputs)
  return rgbToHex(rgb)
}

module.exports = getHex
