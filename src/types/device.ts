export interface DevicesState{
    devices : any[];
    loading: boolean;
    error: null | string;
}
export interface DeviceState{
    device : any;
    loading: boolean;
    error: null | string;
}
export enum DevicesActionTypes{
    FETCH_DEVICES= 'FETCH_DEVICES',
    FETCH_DEVICES_SUCCESS= 'FETCH_DEVICES_SUCCESS',
    FETCH_DEVICES_ERROR= 'FETCH_DEVICES_ERROR',
}
export enum DeviceActionTypes{
    FETCH_DEVICE= 'FETCH_DEVICE',
    FETCH_DEVICE_SUCCESS= 'FETCH_DEVICE_SUCCESS',
    FETCH_DEVICE_ERROR= 'FETCH_DEVICE_ERROR',
}
interface FetchDevicesAction{
    type: DevicesActionTypes.FETCH_DEVICES;
}
interface FetchDevicesSuccessAction{
    type: DevicesActionTypes.FETCH_DEVICES_SUCCESS;
    payload: any[];
}
interface FetchDevicesErrorAction{
    type: DevicesActionTypes.FETCH_DEVICES_ERROR;
    payload: string;
}
interface FetchDeviceAction{
    type: DeviceActionTypes.FETCH_DEVICE;
}
interface FetchDeviceSuccessAction{
    type: DeviceActionTypes.FETCH_DEVICE_SUCCESS;
    payload: any[];
}
interface FetchDeviceErrorAction{
    type: DeviceActionTypes.FETCH_DEVICE_ERROR;
    payload: string;
}

export type DevicesAction = FetchDevicesAction | FetchDevicesSuccessAction | FetchDevicesErrorAction ;
export type DeviceAction = FetchDeviceSuccessAction |FetchDeviceAction |FetchDeviceErrorAction;