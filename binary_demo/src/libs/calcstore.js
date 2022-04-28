import observable from '@riotjs/observable'

function CalculatorStore() {
  observable(this)

  const self = this

  self.hex = ''
  self.max = 7
  self.bitlist = []

  self.convert = (num, currentRadix, resultRadix) => {
    return parseInt(num, currentRadix).toString(resultRadix)
  }

  self.on('hex_changed', (hexVal) => {
    self.hex = hexVal
    const bNum = parseInt(hexVal, 16)
    self.bitlist = []
    for (let i = 0; i <= self.max; i++) {
      self.bitlist.push({
        pos: self.max - i,
        value: ((1 << (self.max - i)) & bNum) > 0 ? 1 : 0,
      })
    }

    self.trigger('binary_changed', self.bitlist)
  })

  self.on('bit_changed', (bitPos) => {
    const mask = 1 << bitPos
    const newHex = parseInt(self.hex, 16) ^ mask
    self.trigger('hex_forced_change', self.convert(newHex, 10, 16))
  })
}

export default CalculatorStore
