import { useState,useEffect } from "react";

function useCurrencyInfo(currency){                 // This function takes currency name as the argument
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())                  // Convert the response from api to json format
        .then((res) => setData(res[currency]))     // store the response into a variable using useState
        
    },[currency])  
    return data;                             // whenever currency is changed the function must be called again therefore currency is a dependency
    
}

export default useCurrencyInfo;         // As every other hook here, the whole function is returned which means we can access the whole function & also the data returned by it.