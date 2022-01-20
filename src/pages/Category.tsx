import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
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