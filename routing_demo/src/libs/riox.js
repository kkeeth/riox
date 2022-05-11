/* riox v0.0.2, @license MIT */
const _rioxApi = ['on', 'off', 'trigger']
const DEFAULT_NAME = 'default'

const riox = {
  _stores: [],
  addStore: function (store, name) {
    name = name || DEFAULT_NAME
    this._stores[name] = store
  },
  reset: function (name) {
    this._stores[name] = []
  },
  resetAll: () => {
    this._stores = []
  },
  getStore: function (key) {
    key = key || DEFAULT_NAME
    return this._stores[key]
  },
  getStoreAll: function () {
    return this._stores
  },
}

_rioxApi.forEach(function (api) {
  riox[api] = function () {
    const args = [].slice.call(arguments)
    for (const [_key, store] of Object.entries(this._stores)) {
      store[api].apply(store, args)
    }
  }
})

if (typeof module !== 'undefined') module.exports = riox
