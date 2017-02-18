/* global describe, it */
const expect = require('expect.js')
const rcolor = require('./index')

const colors = [ // hsv, rgb
  ['black', [0, 0, 0], [0, 0, 0]],
  ['white', [0, 0, 1], [255, 255, 255]],
  ['red', [0, 1, 1], [255, 0, 0]],
  ['lime', [deg(120), 1, 1], [0, 255, 0]],
  ['blue', [deg(240), 1, 1], [0, 0, 255]],
  ['yellow', [deg(60), 1, 1], [255, 255, 0]],
  ['cyan', [deg(180), 1, 1], [0, 255, 255]],
  ['magenta', [deg(300), 1, 1], [255, 0, 255]],
  ['silver', [0, 0, 0.75], [191, 191, 191]], // 192?
  ['gray', [0, 0, 0.5], [127, 127, 127]], // 128?
  ['maroon', [0, 1, 0.5], [127, 0, 0]], // 128?
  ['olive', [deg(60), 1, 0.5], [127, 127, 0]], // 128?
  ['green', [deg(120), 1, 0.5], [0, 127, 0]], // 128?
  ['purple', [deg(300), 1, 0.5], [127, 0, 127]], // 128
  ['teal', [deg(180), 1, 0.5], [0, 127, 127]],
  ['navy', [deg(240), 1, 0.5], [0, 0, 127]]
]

describe('rcolor', function () {
  it('should return hex colors by default', function () {
    const hex = rcolor()
    expect(/^#[a-z0-9]{6}/.test(hex)).to.be(true)
  })

  describe('hsvToRgb', () => {
    const fromHsv = require('./hsvToRgb')

    colors.forEach(([colorName, hsv, expectedRgb]) => {
      it(`should be ${colorName}`, () => {
        const rgb = fromHsv.apply(null, hsv)
        expect(rgb).to.eql(expectedRgb)
      })
    })
  })

  describe('padHex', () => {
    it('should not pad if greater than 2', () => {
      const padHex = require('./padHex')
      expect(padHex('000')).to.be('000')
    })
  })
})

function deg (degrees) {
  return degrees / 360
}
