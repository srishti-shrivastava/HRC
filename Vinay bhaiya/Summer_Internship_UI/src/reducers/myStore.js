import {createStore} from 'redux';
import myReducer from './myReducer';
import allReducer from './index'
const myStore = createStore(allReducer,  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
export default myStore;