import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //using extestion, add redux dev tool extension in Browser
        )
    );
}