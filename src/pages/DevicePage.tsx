import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchDevices} from "../store/action-creators/device";
import {useParams} from "react-router-dom";

const DevicePage = () => {
    const {devices,error,loading} = useTypedSelector(state=> state.device)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(fetchDevices);
    }, [dispatch])
    if (loading){
        return <h1>Loading</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }
    let dev_index:number;
    for (let i=0;i< devices.length;i++){
        if(devices[i].id===id){
            dev_index=i;
        }    
    }
    // @ts-ignore
    const device = devices[dev_index];
    console.log(device);

    return (
        <div>
          {/* <h2>{devices.name}</h2>*/}
            DEVICE - {id}
        </div>
    );
};

export default DevicePage;