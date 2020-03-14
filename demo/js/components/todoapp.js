var todoapp = {
  'css': null,
  'exports': null,

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template(
      '<h3>RiotControl</h3><span>A Simplistic Central Event Controller / Dispatcher For RiotJS, Inspired By Flux</span><todo expr0="expr0" title="Todo Demo"></todo>',
      [{
        'type': bindingTypes.TAG,
        'getComponent': getComponent,

        'evaluate': function(scope) {
          return 'todo';
        },

        'slots': [],

        'attributes': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'title',

          'evaluate': function() {
            return 'Todo Demo';
          }
        }],

        'redundantAttribute': 'expr0',
        'selector': '[expr0]'
      }]
    );
  },

  'name': 'todoapp'
};

export default todoapp;
