import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchDevice} from "../store/action-creators/device";
import {useParams} from "react-router-dom";

const DevicePage = () => {
    const {devices,error,loading} = useTypedSelector(state=> state.device)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(fetchDevice(Number(id)));
    }, [])
    if (loading){
        return <h1>Loading</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }

    return (
        <div>
          {/* <h2>{devices.name}</h2>*/}
            DEVICE - {id}
        </div>
    );
};

export default DevicePage;