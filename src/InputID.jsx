import React, {useState} from 'react';
import GetData from "./GetData.jsx";

const InputId = () => {
    const [data, setData] = useState("");
    const [isRequested, setRequestStatus] = useState(false);
    const [id, setId] = useState(0);

    function handleChange(e) {
        setData(e.target.value);
    }
    function handleRequest() {
        setRequestStatus(true)
        setId(data)
    }

    return (
        <div>
            <input value={data} onChange={handleChange} type="text"/>
            <br/>
            <br/>
            <button onClick={handleRequest}>Get Data</button>
            {isRequested ? <GetData dataId={id} /> : null}
        </div>
    );
};

export default InputId;