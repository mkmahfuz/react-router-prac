import React, { useContext } from 'react';

import {ContextObject1} from '../HomeContex/HomeContext';
const CategoryDetails = () => {
   const ConValue1 = useContext(ContextObject1);
    return (
        <div>
            This is category Details {ConValue1}
        </div>
    );
};

export default CategoryDetails;