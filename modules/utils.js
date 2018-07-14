var Utils = {
  embedMessage: function (text) {
    return {
      embed: {
        color: 9384170,
        description: text
      }
    }
  },
  embedMessageError: function (text) {
    return {
      embed: {
        color: 0xfc1846,
        description: text
      }
    }
  }
}

module.exports = Utils
