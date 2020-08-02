
import {combineReducers, createStore} from "redux";
import PostsReducer from "./postsReducer";


let reducers=combineReducers({
   posts:PostsReducer,
});

const store = createStore(reducers);


export default store;