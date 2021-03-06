import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider }from 'react-redux'
import './index.css';
import App from './components/App';
import combineReducers from './reducers/movies'


//logger({dispatch,getState})(next)(action)
// const logger= function({dispatch,getState}){
//                      return function(next){
//                                return function(action){
//                                           //Middle ware logic
//                                           console.log("Inside logger : "+dispatch)
//                                           console.log("Inside logger : "+getState().movies)
//                                           console.log("Inside logger : "+next)
//                                          console.log("Inside logger : "+action.type)
//                                          return next(action)
//                                        }
//                              }
//                 }
const logger = ({dispatch,getState})=>(next)=>(action)=>{
                                                  //Middle ware logic
  
  if(typeof action !== 'function'){
    console.log("Inside logger action type : "+action.type)
  }
   next(action)
}                                      
                                          
// const thunk = ({dispatch,getState})=>(next)=>(action)=>{
//   console.log("inside thunk action : "+action)
//   if(typeof action === 'function'){
//     action(dispatch)
//     return ;
//   }
//   next(action)
// }                                        
const store = createStore(combineReducers,applyMiddleware(logger,thunk))
// console.log('store',store)
// console.log('state : ',store.getState())
// store.dispatch( {type:'ADD_MOVIES',movies :[{name:'aakash tyagi'}]})
// console.log('state : ',store.getState())

ReactDOM.render(
 
    <Provider store={store}><App/></Provider>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

