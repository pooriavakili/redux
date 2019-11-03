import React from 'react'
import {combineReducers, applyMiddleware, createStore} from "redux";

import Thunk from 'redux-thunk'
export const Reducer=(state,action)=>{
    switch (action.type) {
        case "ADD ELEMENT":
            return action
        default:
            return  state
    }
}
export const Store=createStore(Reducer,applyMiddleware(Thunk))
export default Store;


