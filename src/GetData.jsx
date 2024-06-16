import React, {useEffect, useState} from "react";

function GetData() {
    // using state management, manage
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    // error, loading and success states

    async function fetchData() {
        // complete the code here
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const responseData = await response.json();
        console.log(responseData)
        setLoading(false)
        setData(responseData)
    }

    // call the fetch data function when the
    useEffect( () => {
            try {
                fetchData();
            } catch(err){
                setError(err);
            }
        }, [])
    // page loads


    if(error) {
        return <h2>Error fetching data</h2>
    }

    if(loading) {
        return <h2>Loading data...</h2>
    }
    // Here is the basic data boilerplate
    return (
        <>
            {/* do not edit the code below this line */}
            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
            <h2>Username: {data.username}</h2>
        </>
    );
}

export default GetData;
