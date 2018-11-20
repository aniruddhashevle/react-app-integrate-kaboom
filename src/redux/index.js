import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import { BUILD } from "../config/constants";
import searchDataReducer from './reducers/sample-reducer';
import setKaboomData from './reducers/kaboom-reducer';

export default function createReduxStore() {
    let reduxState = combineReducers({
        rootReducer: combineReducers({
            searchDataReducer,
            setKaboomData
        })
    }),
        middleWare = applyMiddleware(ReduxThunk);
    return createStore(reduxState, BUILD === "dev" && window.devToolsExtension ?
        compose(middleWare, window.devToolsExtension()) : middleWare);
}