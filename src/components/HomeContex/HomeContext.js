import React, { createContext, useState } from 'react';
import Category from '../Category/Category';
export const ContextObject1 = createContext();
const HomeContext = () => {
    const [category,setCategory] = useState('laptop');
    
    return (
        <ContextObject1.Provider value={[category,setCategory]}>
            
            <Category></Category>
            <p onClick={()=>setCategory('lapppo')}>CLick</p>
        </ContextObject1.Provider>

    );
};

export default HomeContext;