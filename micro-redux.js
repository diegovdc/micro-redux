const {dissoc} = require('ramda')//TODO: implement this function so as to not depend on Ramda

const createAction = (Store, actions) => 
 (type, value) => () /*para que se ejecute la función*/ => {
  (actions[type](Store, value))
  Store._log.push({type, value, Store: dissoc('_log', Store)});
}

