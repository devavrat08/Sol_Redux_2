import axios from 'axios';

export const postAction=()=>{
return async(dispatch)=>{
    let response=await axios.get('http://jsonplaceholder.typicode.com/posts')
console.log(response);
    return {type:'FETCH_POSTS_DATA',payload:response}
    
}

};

