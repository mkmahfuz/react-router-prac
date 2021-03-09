import React, { useContext, useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import {ContextObject1} from '../HomeContex/HomeContext';

const allProducts = [
    {name:'Lenovo',category:'laptop'},
    {name:'Asus',category:'laptop'},
    {name:'Dell',category:'laptop'},
    {name:'Samsung',category:'mobile'},
    {name:'Nokia',category:'mobile'},
    {name:'Apple',category:'mobile'},
    {name:'Sony',category:'camera'},
    {name:'Fuzi',category:'camera'},
    {name:'Cannon',category:'camera'},
];

const Category = () => {
    const Convalue = useContext(ContextObject1);
    const [products,setProducts] = useState([]);
    
    return (
        <div>
            <h2>This is category {Convalue}</h2>
            <CategoryDetails></CategoryDetails>
        </div>
    );
};

export default Category;