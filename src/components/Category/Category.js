import React, { useContext } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import {ContextObject1} from '../HomeContex/HomeContext';
const Category = () => {
    const Convalue = useContext(ContextObject1);
    return (
        <div>
            <h2>This is category {Convalue}</h2>
            <CategoryDetails></CategoryDetails>
        </div>
    );
};

export default Category;