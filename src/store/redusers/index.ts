import {combineReducers} from "redux";
import {deviceReducer} from "./deviceReducer";

export const rootReducer = combineReducers({
    device: deviceReducer,
})

export type RootState = ReturnType<typeof rootReducer>;