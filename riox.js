/* riox v0.0.1, @license MIT */
const _rioxApi = ['on', 'off', 'trigger']

const RiotControl = {
  _stores: [],
  addStore: function (store) {
    this._stores.push(store)
  },
  reset: function () {
    this._stores = []
  },
}

_rioxApi.forEach(function (api) {
  RiotControl[api] = function () {
    var args = [].slice.call(arguments)
    this._stores.forEach(function (el) {
      el[api].apply(el, args)
    })
  }
})

if (typeof module !== 'undefined') module.exports = riox
