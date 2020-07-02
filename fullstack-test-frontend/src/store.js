import {applyMiddleware, createStore} from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

import Reducer from './reducer';

const usedMiddleware = [Thunk];

/* eslint-disable no-undef */
if (LOGGING) {
    usedMiddleware.push(Logger);
}
/* eslint-enable no-undef */

const middleware = applyMiddleware(...usedMiddleware);

export default () => createStore(Reducer, middleware);
