import React, { useEffect, useState } from 'react';
import {withRouter, useParams } from 'react-router-dom';

const PostDetails = (props) => {
  
    console.log(props.match.params.postId)
  
    // post deatils api
   const [details, setDetails] =useState({})
    
    useEffect(()=>{
   
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.postId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data));

         }, []);
        
        //  comments api call

         const [comments, setComments ]=useState({});
         useEffect(()=>{

         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.match.params.postId}`)
         .then(res=>res.json())
         .then(data=>setComments(data[0]));
 
          }, [])

    return (

        <div>
            <h1>post details  api</h1>
            <p>ID:{details.id}</p>
            <p>Title:{details.title}</p>
            <p>Body:{details.body}</p>
            <h1>Comments Details:</h1>
           
            <p>name:{comments.name}</p>
            <p>email:{comments.email}</p>
            <p>Body:{comments.body}</p>
           


            
           
        </div>
    );
};



export default withRouter (PostDetails);
