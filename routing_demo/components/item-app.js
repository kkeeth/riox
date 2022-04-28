var itemApp = {
  'css': null,

  'exports': {
    state: {
      items: [],
      txt: null,
      detail: null,
      edit: false
    },

    onBeforeMount(props, state) {
      RiotControl.on('item_list_changed', (items) => {
        state.items = items;
        this.update();
      });

      RiotControl.on('item_detail_changed', (item) => {
        state.edit = false;
        state.detail = item;
        riot.update();
      });

      RiotControl.on('item_detail_create', () => {
        state.edit = true;
        this.update();
      });
    },

    onMounted() {
      RiotControl.trigger('item_list_init');
    },

    add(e) {
      route('add');
    },

    search(e) {
      this.state.txt = e.target.value;
      RiotControl.trigger('item_list_search', this.state.txt);
    },

    clear(e) {
      this.state.txt = '';
      this.input.value = '';
      RiotControl.trigger('item_list_search','');
    },

    submit(e) {
      e.preventDefault();
      RiotControl.trigger('item_detail_add', e.target.title.value);
      e.target.title.value = '';
      this.state.edit = false;
      route('view');
    },

    cancel(e) {
      // console.log(this.$('input'))
      // this.title.value = ''
      this.state.edit = false;
      route('view');
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<h3>Gadget Browser <a href="https://github.com/kkeeth/riot-control">(GitHub)</a></h3><div>Notice the URL routing, back button works as expected.</div><br/><div expr21="expr21"></div><div expr30="expr30"></div>',
      [{
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return !scope.state.edit;
        },

        'redundantAttribute': 'expr21',
        'selector': '[expr21]',

        'template': template(
          '<span>Search:</span><br/><input expr22="expr22" name="input"/><form expr23="expr23"><button expr24="expr24">Clear</button></form><ul><li expr25="expr25"></li></ul><item-detail expr27="expr27"></item-detail><div expr28="expr28"></div><br/><div><button expr29="expr29">Add</button></div>',
          [{
            'redundantAttribute': 'expr22',
            'selector': '[expr22]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onkeyup',

              'evaluate': function(scope) {
                return scope.search;
              }
            }]
          }, {
            'redundantAttribute': 'expr23',
            'selector': '[expr23]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onsubmit',

              'evaluate': function(scope) {
                return scope.clear;
              }
            }]
          }, {
            'redundantAttribute': 'expr24',
            'selector': '[expr24]',

            'expressions': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'disabled',

              'evaluate': function(scope) {
                return !scope.txt;
              }
            }]
          }, {
            'type': bindingTypes.EACH,
            'getKey': null,
            'condition': null,

            'template': template('<a expr26="expr26"> </a>', [{
              'redundantAttribute': 'expr26',
              'selector': '[expr26]',

              'expressions': [{
                'type': expressionTypes.TEXT,
                'childNodeIndex': 0,

                'evaluate': function(scope) {
                  return scope.item.title;
                }
              }, {
                'type': expressionTypes.ATTRIBUTE,
                'name': 'href',

                'evaluate': function(scope) {
                  return '#view/' + scope.item.id;
                }
              }]
            }]),

            'redundantAttribute': 'expr25',
            'selector': '[expr25]',
            'itemName': 'item',
            'indexName': null,

            'evaluate': function(scope) {
              return scope.state.items;
            }
          }, {
            'type': bindingTypes.TAG,
            'getComponent': getComponent,

            'evaluate': function(scope) {
              return 'item-detail';
            },

            'slots': [],

            'attributes': [{
              'type': expressionTypes.ATTRIBUTE,
              'name': 'item',

              'evaluate': function(scope) {
                return scope.state.detail;
              }
            }],

            'redundantAttribute': 'expr27',
            'selector': '[expr27]'
          }, {
            'type': bindingTypes.IF,

            'evaluate': function(scope) {
              return !scope.state.detail;
            },

            'redundantAttribute': 'expr28',
            'selector': '[expr28]',
            'template': template('<span>Choose a product.</span>', [])
          }, {
            'redundantAttribute': 'expr29',
            'selector': '[expr29]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onclick',

              'evaluate': function(scope) {
                return scope.add;
              }
            }]
          }]
        )
      }, {
        'type': bindingTypes.IF,

        'evaluate': function(scope) {
          return scope.state.edit;
        },

        'redundantAttribute': 'expr30',
        'selector': '[expr30]',

        'template': template(
          '<form expr31="expr31"><input name="title"/><button>Submit</button></form><button expr32="expr32">Cancel</button>',
          [{
            'redundantAttribute': 'expr31',
            'selector': '[expr31]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onsubmit',

              'evaluate': function(scope) {
                return scope.submit;
              }
            }]
          }, {
            'redundantAttribute': 'expr32',
            'selector': '[expr32]',

            'expressions': [{
              'type': expressionTypes.EVENT,
              'name': 'onclick',

              'evaluate': function(scope) {
                return scope.cancel;
              }
            }]
          }]
        )
      }]
    );
  },

  'name': 'item-app'
};

export default itemApp;
