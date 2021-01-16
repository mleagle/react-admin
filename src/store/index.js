import { createStore, combineReducers } from 'redux';
import GlobalReducer from "./reducer/global";
import UserReducer from "./reducer/user";
import DeptReducer from "./reducer/dept";

const reducerMap = {
    global: GlobalReducer,
    user: UserReducer,
    dept: DeptReducer
};

//组合多个Reducer
const reducers = combineReducers(reducerMap);

//创建Store
const store = createStore(reducers);

export default store;