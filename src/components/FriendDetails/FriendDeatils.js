import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDeatils = () => {
    const {id} = useParams();
   
    const [friend,setFriend] = useState({}); //remember this is empty object not empty array
    useEffect(()=>{
       const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },[]);
    return (
        <div>
            <h2> Friend Id :  {id} </h2>
            <p>name: {friend.name}</p>
            <p>email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Web: {friend.website}</p>
            {
                
            }
        </div>
    );
};

export default FriendDeatils;