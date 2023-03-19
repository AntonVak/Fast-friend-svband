import { useState, useEffect } from "react";
import TextField from "../components/Forms/textField";

const Login = () => {
  const [data, setData] = useState({email:"", pass: ""});
  const [errors, setErrors] = useState();

  const handleChange = (e) => {
    setData((prevState) => ({
        ...prevState, [e.target.name]: e.target.value
    })); 
  };

  useEffect(() => {
    validate()
  }, [data]);

  const validate = () => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit}>
    <TextField type="text" label="E-mail" name="email" value={data.email} onChange={handleChange}/>
    <TextField type="password" label="Password" name="pass" value={data.password} onChange={handleChange}/>
     <button>Submit</button>
    </form>
  );
};

export default Login;
