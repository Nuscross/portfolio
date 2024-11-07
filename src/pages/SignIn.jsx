import { useState } from "react";
import { toast } from "react-toastify";

const SignIn = () => {

  const [signInInputs, setSignInInputs] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const loginSystem = async (credentials) => {
    return fetch("https://dummyjson.com/auth/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .catch(error => console.error('error', error))
  } 

  const validateForm = () => {
    const newErrors = {};

    console.log(signInInputs.username);
    console.log(signInInputs.password);

    if (!signInInputs.username) {
      newErrors.username = "* Your username is required.";
    }
    if (!signInInputs.password) 
    {
      newErrors.password = "* Your password is required.";
    }

    console.log(newErrors);

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignInInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const result = await loginSystem({
        username: signInInputs.username,
        password: signInInputs.password
      })
      if ('accessToken' in result) {
        localStorage.setItem('accessToken', result.accessToken);
        window.location.href = "/admin";
      }
      else {
        toast.error("Invalid username or password.");
      }
    }
  }

  return (
    <div className="sign-in">
      <div className="sign-in-overlay"></div>
      <div className='sign-in-card'>
        <h1>
          coffee<br/>
          <span className="text-[18px]">blend</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-box">
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              placeholder="Please insert your username."
              value={signInInputs.username} 
              onChange={handleChange}
            />
            {errors.username && <div className="validate-error" style={{padding: 0, marginTop: '15px'}}>{errors.username}</div>}
          </div>
          <div className="form-box">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Please insert your password."
              value={signInInputs.password} 
              onChange={handleChange}
            />
            {errors.password && <div className="validate-error" style={{padding: 0, marginTop: '15px'}}>{errors.password}</div>}
          </div>
          <div className="form-box">
            <button type="submit" className="btn-primary cursor-pointer">Sign In</button>
            <button type="button" className="btn-third cursor-pointer" onClick={() => window.location.href = "/"}>Back Home</button>
          </div>
          <div className="text-center text-white">
            <p>
              <span className="text-gray-500">Username :</span>&nbsp; emilys
            </p>
            <p className="mt-[10px]">
              <span className="text-gray-500">Password :</span>&nbsp; emilyspass
            </p>
          </div>
        </form>
      </div>
    </div>
  )

}

export default SignIn;