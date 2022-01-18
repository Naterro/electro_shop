export interface DeviceState{
    devices : any[];
    loading: boolean;
    error: null | string;
}
export enum DeviceActionTypes{
    FETCH_DEVICES= 'FETCH_DEVICES',
    FETCH_DEVICES_SUCCESS= 'FETCH_DEVICES_SUCCESS',
    FETCH_DEVICES_ERROR= 'FETCH_DEVICES_ERROR',
}
interface FetchDevicesAction{
    type: DeviceActionTypes.FETCH_DEVICES;
}
interface FetchDevicesSuccessAction{
    type: DeviceActionTypes.FETCH_DEVICES_SUCCESS;
    payload: any[];
}
interface FetchDevicesErrorAction{
    type: DeviceActionTypes.FETCH_DEVICES_ERROR;
    payload: string;
}
export type DeviceAction = FetchDevicesAction | FetchDevicesSuccessAction | FetchDevicesErrorAction;