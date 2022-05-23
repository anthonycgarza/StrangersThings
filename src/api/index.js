export const COHORT_NAME = '2202-FTB-ET-WEB-FT';
export const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
 

  export const callApi = async ({url,method,token,body}) =>{
   try{
     const options = {
       method: method ? method.toUpperCase() : "GET" ,
       headers:{
         'Content-Type':'application/json',
       },
       body:JSON.stringify(body)
     }
     if(token){
       options.headers['Authorization'] = `Bearer ${token}`
     }
     const response = await fetch(BASE_URL + url,options);
     const data = await response.json();
     return data;
   }
     catch(error){
       console.error(error)
     }
   }
 
 // GET /api/COHORT-NAME/users/me
 export const getUser = async (token) =>{
   try{
     const resp = await fetch(`${BASE_URL}users/me`, {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
     })
     const userObj = resp.json();
     return userObj;
 
   }catch(error){
     console.error(error);
   }
 }
 
 
 // call api to add post
 export const addPost = async (postObject, token) => {
   const { title, description, price, location, willDeliver } = postObject;
   try {
     const resp = await fetch(`${BASE_URL}/posts`, {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify({
         post: {
           title,
           description,
           price,
           location,
           willDeliver
         }
       })
     })
     const newPost = resp.json();
     console.log(newPost)
 
     return newPost;
   } catch (error) {
     console.error(error)
   }
 }
 
 
 
 // call api to edit post
 export const editPost = async (postObj,token) => {
   const {title, description, price, location, willDeliver,_id} = postObj;
   try{
     const resp = await fetch(`${BASE_URL}/posts/${_id}`, {
       method: "PATCH",
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify({
         post: {
           title,
           description,
           price,
           location,
           willDeliver
         }
       })
     })
     const editedPost = resp.json();
     return editedPost;
 
   } catch(error){
     console.error(error)
   }
 }
 

 // call api to delete post
 export const deletePost = async (token, id) => {
   try {
     const resp = await fetch(`${BASE_URL}/posts/${id}`, {
       method: "DELETE",
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       }
     })
     const {success} = resp.json();
     if(success){
       console.log("Message has been deleted")
     }
   } catch (error) { 
     console.error(error)
   }
 }
 

 //call apt to send message to user of a post
 export const sendMessage = async ({content, token, postId}) =>{
   try{
     const resp = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify({
         message: {
           content
         }
       })
     })
     const data = resp.json();
     return data;
   }catch(error){
     console.error(error);
   }
 } 