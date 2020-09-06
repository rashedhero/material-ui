import React, { useEffect, useState } from 'react';
import {withRouter, useParams } from 'react-router-dom';

const PostDetails = (props) => {
    // const {name,mail}=props.postId;
    console.log(props.match.params.postId)
    // const {props.match.params.postId}=useParams();
    
   const [details, setDetails] =useState({})
    
    useEffect(()=>{
   
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.postId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))

    }, [])
    return (

        <div>
            <p>ID:{details.id}</p>
            <p>title:{details.title}</p>
            <p>Body:{details.body}</p>
            
           
        </div>
    );
};

export default withRouter (PostDetails);
