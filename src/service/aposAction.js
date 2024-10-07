import axios from "axios"

const BAse_url = "https://blog-api-rvqd.onrender.com" 


export const getBlogs= async ()=>{
    try {
        const res = await axios.get(`${BAse_url}/user/data`)
        console.log(res);
        
        return res.data
    } catch (error) {
        console.error("not data")
        
    }
    
}
export const LoginApiHandle =  async(email,password,name)=>{
    let body ={
        name : name,
        email,
        password

    }
    let url = `${BAse_url}/auth/login`
   try {
     let res = await axios.post(url,body)
     return res.data
   } catch (error) {
    console.error("fail to login")
    return false
    
   }

}
export const addNewPostApiHandle = async (data)=>{
   // console.log(data);
    const token =localStorage.getItem("auth")
    console.log(data);
    
    //console.log(data.title, data.,data.image);
    

    const formdata = new FormData()
   try {
     formdata.append("title",data.title)
     formdata.append("comment",data.content)
     formdata.append("file", data.image)
     let url =`${BAse_url}/admin/data`
     const res = await axios.post(url,formdata,{
         headers :{
             "auth" : token,
             'Content-Type': 'multipart/form-data'
 
         }
     })
     return res.data
   } catch (error) {
    
    console.log(error);
    
   }
    
    
    

}
export const deletePostApiHandle =  async(id) =>{
   try {
     const url = `${BAse_url}/admin/data/${id}`
     const res = await axios.delete(url)
     return res.data
   } catch (error) {

    console.log("error");
    
    
   }


}