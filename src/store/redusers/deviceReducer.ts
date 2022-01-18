import {DeviceAction, DeviceActionTypes, DeviceState } from "../../types/device";

const initialState : DeviceState = {
    devices : [],
    loading: false,
    error: null
}

export const deviceReducer = (state = initialState , action:DeviceAction) :DeviceState=>{
    switch (action.type){
        case DeviceActionTypes.FETCH_DEVICES:
            return {loading:true, error:null, devices:[]};
        case DeviceActionTypes.FETCH_DEVICES_SUCCESS:
            return {loading:false, error:null, devices:action.payload};
        case DeviceActionTypes.FETCH_DEVICES_ERROR:
            return {loading:false, error:action.payload, devices:[]};
        default:
            return state;
    }
}