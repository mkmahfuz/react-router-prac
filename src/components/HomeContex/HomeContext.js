import React, { createContext, useState } from 'react';
import Category from '../Category/Category';
export const ContextObject1 = createContext();
const HomeContext = () => {
    const [con1,setCon1] = useState('k');
    
    return (
        <ContextObject1.Provider value={con1}>
            
            <Category></Category>
            <p onClick={()=>setCon1('lapppo')}>CLick</p>
        </ContextObject1.Provider>

    );
};

export default HomeContext;