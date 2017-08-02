# micro-redux
Because right now I do not have enought time to learn Redux.

A super simple approach to some of the ideas behind Redux, including some sort of time-travel debugging.

## Usage
```
//store.js or whatever.js
import {createAction} from 'micro-redux'

export const Store = {
  counter: 0,
}

export const action = createAction(
  Store,
  {
    increment: (Store, value) =>  Store.counter = Store.counter + 1//this function should change one or more state properties at a time, and should return undefined.  All of them recieve the Store object and may receive an additional value of any kind, Unless you want to destroy your Store, you should not do anything like this Object.assign(Store, {/*anything*/})
  }
)

//You get time-travel debugging via the `_log` property
action('increment')//{counter: 1, _log:[{type: 'increment', value: undefined, Store: {counter: 1}}]}
action('increment')//{counter: 2, _log:[{type: 'increment', value: undefined, Store: {counter: 1}}, {type: 'increment', value: undefined, Store: {counter: 2}}]}
action('increment')//{counter: 3, _log:[{type: 'increment', value: undefined, Store: {counter: 1}}, {type: 'increment', value: undefined, Store: {counter: 2}}, {type: 'increment', value: undefined, Store: {counter: 3}}]}
```

## Usage in a component
```
//component.js
import {action}

const Counter = (counter) => (
	<button onClick={action('increment')}>Increment</button>
	Count is at: {counter}
)

//somewhere-else.js
import {Store}
...
<Counter counter={Store.counter}/>
...
```