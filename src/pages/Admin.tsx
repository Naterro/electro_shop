import React from 'react';
import axios from "axios";

const onj = {
    id: 3,
    name: "Moulinex ExtraMegaSpeed",
    brand: "Moulinex",
    category: "grinder",
    price: 9900,
    date_receipt: "2022.01.15",
    desc: "ExtraMegaSpeed"
}

const Admin = () => {
    const response = axios.post('https://my-json-server.typicode.com/naterro/fake_server/devices/',onj);
    console.log(response)
    return (
        <div>
            ADMIN
        </div>
    );
};

export default Admin;