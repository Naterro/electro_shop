import {DeviceAction, DeviceActionTypes} from "../../types/device"
import {Dispatch} from "redux";
import axios from "axios";


export const fetchDevices = ()=>{
    return async (dispatch:Dispatch<DeviceAction>)=>{
        try {
            dispatch({type:DeviceActionTypes.FETCH_DEVICES});
            const response = await axios.get('https://my-json-server.typicode.com/naterro/fake_server/devices');
            dispatch({type:DeviceActionTypes.FETCH_DEVICES_SUCCESS,payload:response.data});
        }
        catch (e) {
            dispatch({
                type:DeviceActionTypes.FETCH_DEVICES_ERROR,
                payload:`error device action ${e}`
            })
        }
    }
}