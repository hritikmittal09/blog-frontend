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