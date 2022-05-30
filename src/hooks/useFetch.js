import {useEffect, useState} from 'react';


const useFetch = (url) => {
    const abortFetch = new AbortController();
    var [data, setData] = useState(false);
    
    useEffect(()=>{
        fetch(url, {signal: abortFetch.signal})
        .then((res)=>{ 
            if(!res.ok)
            {
                throw Error("We can't fetch data ");
            } 
            return (res.json())}
        ).then((data)=> setData(data)
        ).catch((err)=>{
            if( err.name === "Abort Error"){
                console.log('Abort error');
            }
            else{
                console.log(err.message);
            }
        })
        return (()=>{abortFetch.abort()});
    }, [url]);
    return ({data})
}

export default useFetch;