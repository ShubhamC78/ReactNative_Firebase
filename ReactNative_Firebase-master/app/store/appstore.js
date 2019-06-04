import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import { createLogger } from 'redux-logger'
import sagas from '../sagas';
import rootReducer from '../reducers';
import * as common from '../utils/modCommon';

const sagaMiddleware = createSagaMiddleware();

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});


export default function configureStore(){
  // Now it's time to decide which storage engine should be used
// Note: The arguments to `createEngine` are different for every engine! 
  const engine = createEngine('AppTree'); // Why we create engine?

  // And with the engine we can create our middleware function. The middleware 
// is responsible for calling `engine.save` with the current state afer 
// every dispatched action. 
// 
// Note: You can provide a list of action types as second argument, those 
//       actions will be filtered and WON'T trigger calls to `engine.save`! 
  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();


// As everything is prepared, we can go ahead and combine all parts as usual 
  const store = createStore(
    storage.reducer(rootReducer), //Apply redux-storage so we can persist Redux state to disk
    //To apply multiple store enhancers, you may use compose()
    compose(
      applyMiddleware(
        sagaMiddleware,
        storeMiddleware,
        logger,
      ),
    ),
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  // At this stage the whole system is in place and every action will trigger 
// a save operation. 
// 
// BUT (!) an existing old state HAS NOT been restored yet! It's up to you to 
// decide when this should happen. Most of the times you can/should do this 
// right after the store object has been created. 
 
// To load the previous state we create a loader function with our prepared 
// engine. The result is a function that can be used on any store object you 
// have at hand :) 
  const load = storage.createLoader(engine);

// Notice that our load function will return a promise that can also be used 
// to respond to the restore event. 
  load(store)
    .then((newState) => common.log('info',"loaded state is :: "+newState)) // For what we need to use this ask Ankit? In which cases??
    .catch(() => common.log('error','Failed to load previous state'));

  //intialize saga once all settings are done.
  sagaMiddleware.run(sagas);

  return store;

}