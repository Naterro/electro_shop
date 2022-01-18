import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const DeviceList : React.FC = () => {
    //const state = useTypedSelector(state=> state.device)
    const {devices,error,loading} = useTypedSelector(state=> state.device)

    return (
        <div>

        </div>
    );
};

export default DeviceList;