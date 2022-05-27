import React, { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('https://obscure-taiga-87074.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data => setTools(data))
    },[])
    return [tools]
};

export default useTools;