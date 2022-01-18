import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchDevices} from "../store/action-creators/device";

const DeviceList : React.FC = () => {
    //const state = useTypedSelector(state=> state.device)
    const {devices,error,loading} = useTypedSelector(state=> state.device)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchDevices());
    }, [])
    if (loading){
        return <h1>Loading</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }
    console.log(devices);
    return (
        <div>
            {devices.map(device=>
                <div>{device.name}</div>
            )}
        </div>
    );
};

export default DeviceList;