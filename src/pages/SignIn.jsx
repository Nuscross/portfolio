import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import { postLogin } from "../management/api";

const SignIn = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSystem = async (credentials) => {
    const dataResponse = await postLogin(credentials);
    return dataResponse;
  } 

  const onSubmit = async (data) => {
    const result = await loginSystem(data)
    if ('accessToken' in result) {
      localStorage.setItem('accessToken', result.accessToken);
      navigate("/admin");
    }
    else {
      toast.error("Invalid username or password.");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-box">
            <label>Username</label>
            <input
              type="text"
              {...register('username', { required: '* Your username is required.' })}
              placeholder="Please insert your username."
            />
            { errors.username &&
              <div className="validate-error" style={{ padding: 0, marginTop: '15px' }}>
                { errors.username.message }
              </div>
            }
          </div>
          <div className="form-box">
            <label>Password</label>
            <input
              type="password"
              {...register('password', { required: '* Your password is required.' })}
              placeholder="Please insert your password."
            />
            { errors.password &&
              <div className="validate-error" style={{ padding: 0, marginTop: '15px' }}>
                { errors.password.message }
              </div>
            }
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