const padHex = require('./padHex')

module.exports = function (rgb) {
  const parts = rgb
    .map(val => padHex(val.toString(16)))
    .join('')

  return `#${parts}`
}
