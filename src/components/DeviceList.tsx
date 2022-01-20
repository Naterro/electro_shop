import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchDevices} from "../store/action-creators/device";
import {DEVICE_ROUTE} from "../utils/consts";
import {Image} from "react-bootstrap";

const DeviceList : React.FC = ({children, ...props}) => {
    //const state = useTypedSelector(state=> state.device)
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
    console.log(children)
    console.log(devices)
    devices.sort((a:any,b:any):number=>{
        if (a.date_receipt > b.date_receipt) {
            return 1;
        }
        if (a.date_receipt < b.date_receipt) {
            return -1;
        }
        return 0;
    });
    return (
        <div className="main-list">
            {devices.map(device=> {
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
            })}
        </div>
    );
}

export default DeviceList;