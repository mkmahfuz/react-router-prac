import React from 'react';
import {Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle = {
        border: '1px solid lightgray',
        margin: '20px',
        padding : '20px',
        borderRadius : '10px',
    };
    const history = useHistory();
    const handleClick = (fid)=>{
        console.log(fid);
        const url = `/friend/${fid}`;
        history.push(url)
    };
    return (
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <h5>Email: {email}</h5>
            <p>Id: {id}</p>
            
            <Link to={'/friend/'+id}><button>Show friend details</button></Link>

            <button onClick={()=>handleClick(id)}>Click me-show-details</button>
            
        </div>
    );
};

export default Friend;