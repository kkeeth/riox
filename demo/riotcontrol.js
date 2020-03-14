const _RiotControlApi = ['on','one','off','trigger']
const RiotControl = {
  _stores: [],
  addStore: function(store) {
    this._stores.push(store)
  }
}
_RiotControlApi.forEach((api) => {
  RiotControl[api] = function() {
    const args = [].slice.call(arguments)
    this._stores.forEach((el) => {
      el[api].apply(null, args)
    })
  }
})
