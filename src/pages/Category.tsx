import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchDevices} from "../store/action-creators/device";
import {DEVICE_ROUTE} from "../utils/consts";
import {Image} from "react-bootstrap";

const Category = () => {
    const {category} = useParams();
    const {devices,error,loading} = useTypedSelector(state=> state.devices)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchDevices());
    }, [dispatch])
    if (loading){
        return <h1>Loading</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }
    console.log(category);

    return (
        <div className="main-list">
            {devices.map(device=> {
                if(device.category==category){
                return <div key={device.id} className="main-item">
                    <a href={DEVICE_ROUTE + '/' + device.id}>
                        <div className="item-grid">
                            <div>
                                <Image width={300} height={300}  />
                            </div>
                            <div className="item-text">
                                <h4>{device.name}</h4>
                                <p>{`Цена: ${device.price} У.Е.`}</p>
                            </div>
                        </div>
                    </a>
                </div>
            }})}
        </div>
    );
};

export default Category;