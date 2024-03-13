
import React,{useState}from 'react';
import Layout from './../../components/Layout/Layout';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import "../../styles/AuthStyles.css";
import {useAuth} from "../../context/auth";
const Login = () => {
   
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth]= useAuth()
    const navigate=useNavigate();
    //form function
const handleSubmit=async (e) =>{
    e.preventDefault();
   try{
    const res = await axios.post('/api/v1/auth/login',{email,password});
   if(res && res.data.success){
    toast.success(res.data.message);
    setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token,
    });
    localStorage.setItem("auth",JSON.stringify(res.data)); 
    navigate("/");

   }else{
    toast.error(res.data.message);
   }

} catch (error){
    console.log(error);
    toast.error("Something went wrong");
}

};
    
  return (
    <Layout title="Register SpellCart">
    <div className="form-container">
      <h2 className="title">Login Form</h2>
      <form onSubmit={handleSubmit}>
     

<div className="mb-3">
  
  <input type="email"value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1"placeholder='Enter your Email:'required/>
</div>
<div className="mb-3">
 
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"placeholder='Enter your Password:'required/>
</div>

  <button type="submit" className="btn btn-primary">Login</button>
  </form>
</div>

  </Layout>
  );
};

export default Login;