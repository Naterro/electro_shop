import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchDevices} from "../store/action-creators/device";
import {DEVICE_ROUTE} from "../utils/consts";
import {Image} from "react-bootstrap";
import DeviceList from "../components/DeviceList";

const Category = () => {
    const {category} = useParams();
    return (
        <div>
            <DeviceList children={category}/>
        </div>
    );

};

export default Category;