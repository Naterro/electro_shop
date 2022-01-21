import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchDevice} from "../store/action-creators/device";
import {useParams} from "react-router-dom";
import {Image} from "react-bootstrap";
import {isAuth} from "../components/AppRouter";


const DevicePage = () => {
    const {device,loading,error} = useTypedSelector(state=> state.device);
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(fetchDevice(Number(id)));
    }, [dispatch, id])
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
            <div>  <h3>{device.name}</h3></div>
            <div>Цена - {device.price}</div>
            <div>Производитель - {device.brand}</div>
            <div>Описание:</div>
            <div>{device.desc}</div>
        </div>
    );
};

export default DevicePage;