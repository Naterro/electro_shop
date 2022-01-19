import {combineReducers} from "redux";
import {deviceReducer, devicesReducer} from "./deviceReducer";

export const rootReducer = combineReducers({
    devices: devicesReducer,
    device:deviceReducer,
})

export type RootState = ReturnType<typeof rootReducer>;