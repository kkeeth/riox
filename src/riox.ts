const _rioxApi: string[] = ['on', 'off', 'trigger']
const DEFAULT_NAME: string = 'default'

type Riox {
  _stores: {
    object[key: string]
  }
  addStore: (store: object, key?: string) => void
  reset: (key: string) => void
  resetAll: () => void
  getStore: (key?: string) => object
  getStoreAll: () => object[]
}

const riox: Riox = {
  _stores: [],
  addStore: function (store, key) {
    key = key || DEFAULT_NAME
    this._stores[key] = store
  },
  reset: function (key) {
    this._stores[key] = []
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

export default {
  riox
}
