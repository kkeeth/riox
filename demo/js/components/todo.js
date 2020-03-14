var todo = {
  'css': null,

  'exports': {
    state: {
      disabled: true,
      items: [],
      text: ""
    },

    onBeforeMount(props, state) {
      // Register a listener for store change events.
      RiotControl.on('todos_changed', (items) => {
        state.items = items;
        this.update();
      });
    },

    onMounted() {
      // Trigger init event when component is mounted to page.
      // Any store could respond to this.
      RiotControl.trigger('todo_init');
    },

    edit(e) {
      this.update({
        text: e.target.value
      });
    },

    add(e) {
      if (this.state.text) {
        e.preventDefault();

        // Trigger event to all stores registered in central dispatch.
        // This allows loosely coupled stores/components to react to same events.
        e.target.input.value = '';
        RiotControl.trigger('todo_add', { title: this.state.text });
      }
    },

    toggle(e) {
      e.done = !e.done;
      this.update();
    },

    remove(e) {
      RiotControl.trigger('todo_remove');
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<h3 expr0="expr0"> </h3><ul><li expr1="expr1"></li></ul><form expr4="expr4"><input expr5="expr5" name="input"/><button expr6="expr6"> </button></form><button expr7="expr7">Remove</button>',
      [{
        'redundantAttribute': 'expr0',
        'selector': '[expr0]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.props.title;
          }
        }]
      }, {
        'type': bindingTypes.EACH,
        'getKey': null,
        'condition': null,

        'template': template('<label expr2="expr2"><input expr3="expr3" type="checkbox"/> </label>', [{
          'redundantAttribute': 'expr2',
          'selector': '[expr2]',

          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 1,

            'evaluate': function(scope) {
              return [scope.item.title].join('');
            }
          }, {
            'type': expressionTypes.ATTRIBUTE,
            'name': 'class',

            'evaluate': function(scope) {
              return scope.item.done && 'completed';
            }
          }]
        }, {
          'redundantAttribute': 'expr3',
          'selector': '[expr3]',

          'expressions': [{
            'type': expressionTypes.ATTRIBUTE,
            'name': 'checked',

            'evaluate': function(scope) {
              return scope.item.done;
            }
          }, {
            'type': expressionTypes.EVENT,
            'name': 'onclick',

            'evaluate': function(scope) {
              return () => scope.toggle(scope.item);
            }
          }]
        }]),

        'redundantAttribute': 'expr1',
        'selector': '[expr1]',
        'itemName': 'item',
        'indexName': null,

        'evaluate': function(scope) {
          return scope.state.items;
        }
      }, {
        'redundantAttribute': 'expr4',
        'selector': '[expr4]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onsubmit',

          'evaluate': function(scope) {
            return scope.add;
          }
        }]
      }, {
        'redundantAttribute': 'expr5',
        'selector': '[expr5]',

        'expressions': [{
          'type': expressionTypes.EVENT,
          'name': 'onkeyup',

          'evaluate': function(scope) {
            return scope.edit;
          }
        }]
      }, {
        'redundantAttribute': 'expr6',
        'selector': '[expr6]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return ['Add #', scope.state.items.length + 1].join('');
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'disabled',

          'evaluate': function(scope) {
            return !scope.state.text;
          }
        }]
      }, {
        'redundantAttribute': 'expr7',
        'selector': '[expr7]',

        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'disabled',

          'evaluate': function(scope) {
            return !scope.state.items.length;
          }
        }, {
          'type': expressionTypes.EVENT,
          'name': 'onclick',

          'evaluate': function(scope) {
            return scope.remove;
          }
        }]
      }]
    );
  },

  'name': 'todo'
};

export default todo;
