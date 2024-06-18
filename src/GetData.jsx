import React, {useEffect, useState} from "react";
import InputID from "./InputID.jsx";

function GetData(props) {
    // using state management, manage
    // console.log(props.dataId)
    // error, loading and success states
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.dataId}`);
        if (!response.ok) {
            setError("Error fetching data");
        }
        const responseData = await response.json();
        // console.log(responseData)
        setLoading(false)
        setData(responseData)
    }

    // call the fetch data function when the
    // page loads
    useEffect( () => {
            fetchData();
    },[props.dataId])


    if(error) {
        return <h2>Error fetching data</h2>
    }

    if(loading) {
        return <h2>Loading data...</h2>
    }

    return (
        <>
            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
            <h2>Username: {data.username}</h2>
        </>
    );
}

export default GetData;
