import React, { useContext } from 'react';

import {ContextObject1} from '../HomeContex/HomeContext';
const CategoryDetails = () => {
   const [ConValue1,setConValue1] = useContext(ContextObject1); //this return an array
    return (
        <div>
            This is category Details {ConValue1}
            <br/>
            <button onClick={()=>setConValue1('mobile')}>Change value</button>
        </div>
    );
};

export default CategoryDetails;