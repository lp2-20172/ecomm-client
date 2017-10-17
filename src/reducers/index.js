import {combineReducers} from 'redux'

//import counterReducer from './counterReducer'
import categoria from './categoria-reducer'
//import ecomm from './ecommReducer'
import themeReducer from './appLayoutReducer'


var reducers = combineReducers({
   // counter: counterReducer,
  categoria: categoria,
  //  ecomm: ecomm,
  theme:themeReducer,

});

export default reducers;