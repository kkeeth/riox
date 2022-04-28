var itemDetail = {
  'css': null,
  'exports': null,

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<div expr6="expr6"></div>', [{
      'type': bindingTypes.IF,

      'evaluate': function(scope) {
        return scope.props.item;
      },

      'redundantAttribute': 'expr6',
      'selector': '[expr6]',

      'template': template(
        '<h3>Item Details</h3><div expr7="expr7"><b>ID:</b> </div><div expr8="expr8"><b>Name:</b> </div>',
        [{
          'redundantAttribute': 'expr7',
          'selector': '[expr7]',

          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 1,

            'evaluate': function(scope) {
              return [scope.props.item.id].join('');
            }
          }]
        }, {
          'redundantAttribute': 'expr8',
          'selector': '[expr8]',

          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 1,

            'evaluate': function(scope) {
              return [scope.props.item.title].join('');
            }
          }]
        }]
      )
    }]);
  },

  'name': 'item-detail'
};

export default itemDetail;
