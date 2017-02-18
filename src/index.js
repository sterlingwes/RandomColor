const assign = require('./assign')
const hsvToRgb = require('./hsvToRgb')
const rgbToHex = require('./rgbToHex')
const goldenRatio = 0.618033988749895

function getRgb (opts, inputs = {}) {
  let { hue } = opts
  hue += goldenRatio
  hue %= 1

  let { saturation, value } = inputs

  if (typeof saturation !== 'number') saturation = 0.5
  if (typeof value !== 'number') value = 0.95

  return hsvToRgb(hue, saturation, value)
}

function getHex (opts, inputs) {
  const rgb = getRgb(opts, inputs)
  return rgbToHex(rgb)
}

function getDefaults () {
  return {
    hue: Math.random()
  }
}

module.exports = function (options) {
  const opts = assign(getDefaults(), options || {})
  return getHex.bind(null, opts)
}
