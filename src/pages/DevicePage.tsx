import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchDevice} from "../store/action-creators/device";
import {useParams} from "react-router-dom";
import {Image} from "react-bootstrap";


const DevicePage = () => {
    const {device,loading,error} = useTypedSelector(state=> state.device);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(fetchDevice(Number(id)));
    }, [dispatch])
    if (loading){
        return <h1>Loading</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }
    console.log(device);





    return (
        <div>
            <Image width={400} height={300} />
           <h2>{device.name}</h2>
            Цена - {device.price}

            DEVICE - {id}

        </div>
    );
};

export default DevicePage;