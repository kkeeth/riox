# riot-control
============

__UPDATE:__ Experimental multi-threaded version under [dev branch](https://github.com/kkeeth/riot-control/tree/dev).

```bash
$ npm install riot-control
```

A Simplistic Central Event Controller / Dispatcher For [RiotJS](https://github.com/riot/riot), Inspired By Facebook's [Flux](https://github.com/facebook/flux) Architecture Pattern.
In addition, this library supports [riot-control](https://github.com/kkeeth/riot-control) for [version4](https://riot.js.org/).

riot-control is, in the spirit of Riot itself, extremely lightweight. It forgoes elements of Flux, to favor small and simple applications. riot-control passes events from views to stores, and back, relying heavily on [Riot's observerable API](https://github.com/riot/observable). Stores can talk to many views, and views can talk to many stores.

Example data flow
-------

Given the following:

- A TodoList view (Riot tag)
  - Triggers actions/events through riot-control and listens for data change events.
- A TodoStore (generic JS data store)
  - Mix of model manager/MVC-pattern controller that listens for actions/events, performs business logic, and dispatches data changed events.

Possible data flow:

1. TodoList view triggers 'todo_remove' event to riot-control.
2. riot-control passes event along to stores.
3. TodoStore implements a 'todo_remove' event handler, talks to back-end server.
4. TodoStore triggers 'todos_changed' event, with new data. (new list with the todo removed)
5. TodoList view implements a 'todos_changed' event handler, receiving new data, and updating the UI.

This encourages loosely coupled components. Stores house application logic and domain-specific data. Views comprise the user interface. Either side can be swapped out without interfering with the other. For example, a store that saves to local storage can be easily swapped for one that saves to a back-end service instead.

Demos
============

[TodoList](http://kkeeth.github.io/riot-control/demo/)

Reference demo/todostore.js and todo.tag to understand how this works.

[URL Routing Example](http://kkeeth.github.io/riot-control/routing_demo/)

Reference routing_demo/index.html, itemstore.js, and item-app.tag

[Binary Calculator](http://kkeeth.github.io/riot-control/binary_demo/)

Things People Have Built
============

[Flux Catalog](https://github.com/txchen/feplay/tree/gh-pages/riot_flux)

RiotJS version of the flux-comparison catalog.

[Where Da Movies At](https://github.com/derekr/wheredamoviesat)

Map of all movies in a given location.

Usage
============

Requires Riot 2.0+

Include riotcontrol.js, or it's few lines of code, in your project.

API
============

Register the store in central dispatch, where store is a `observable()`. Generally, all stores should be created and registered before the Riot app is mounted.

```javascript
RiotControl.addStore(store)

// Example, at start of application:
var todoStore = new TodoStore() // Create a store instance.
RiotControl.addStore(todoStore) // Register the store in central dispatch.
```

Trigger event on all stores registered in central dispatch. Essentially, a 'broadcast' version of Riot's el.trigger() API.

```javascript
RiotControl.trigger(event)
RiotControl.trigger(event, arg1 ... argN)

// Example, inside Riot view (tag):
RiotControl.trigger('todo_add', { title: self.text })
```

Listen for event, and execute callback when it is triggered. This applies to all stores registered, so that you may receive the same event from multiple sources.

```javascript
RiotControl.on(event, callback)

// Example, inside Riot view (tag):
RiotControl.on('todos_changed', (items) => {
    self.items = items
    self.update()
})
```

Remove event listener.

```javascript
RiotControl.off(event)

RiotControl.off(event, callback)
```

Same as RiotControl.on(), executes once.

```javascript
RiotControl.one(event, callback)
```

## License

[MIT](https://github.com/kkeeth/riot-control/blob/master/LICENSE)

## Others

I'm waiting for you at any time, including code reviews, bug reports, feature additions, questions and more!
