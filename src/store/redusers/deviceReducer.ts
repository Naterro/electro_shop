import {DevicesAction, DeviceAction, DeviceActionTypes, DevicesActionTypes, DevicesState, DeviceState } from "../../types/device";

const initialStates : DevicesState = {
    devices : [],
    loading: false,
    error: null
}
const initialState : DeviceState = {
    device: {} ,
    loading: false,
    error: null
}

export const devicesReducer = (state = initialStates , action:DevicesAction) :DevicesState=>{
    switch (action.type){
        case DevicesActionTypes.FETCH_DEVICES:
            return {loading:true, error:null, devices:[]};
        case DevicesActionTypes.FETCH_DEVICES_SUCCESS:
            return {loading:false, error:null, devices:action.payload};
        case DevicesActionTypes.FETCH_DEVICES_ERROR:
            return {loading:false, error:action.payload, devices:[]};

        default:
            return state;
    }
}
export const deviceReducer = (state = initialState , action:DeviceAction) :DeviceState=>{
    switch (action.type){
        case DeviceActionTypes.FETCH_DEVICE:
            return {loading:true, error:null, device:{}};
        case DeviceActionTypes.FETCH_DEVICE_SUCCESS:
            return {loading:false, error:null, device:action.payload};
        case DeviceActionTypes.FETCH_DEVICE_ERROR:
            return {loading:false, error:action.payload, device:{}};
        default:
            return state;
    }
}