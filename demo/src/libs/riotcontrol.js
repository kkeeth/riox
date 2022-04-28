const _RiotControlApi = ['on', 'one', 'off', 'trigger']
const RiotControl = {
  _stores: [],
  addStore: function (store) {
    this._stores.push(store)
  },
  reset: function () {
    this._stores = []
  },
}
_RiotControlApi.forEach((api) => {
  RiotControl[api] = function () {
    const args = [].slice.call(arguments)
    this._stores.forEach((el) => {
      el[api].apply(el, args)
    })
  }
})

export default RiotControl
