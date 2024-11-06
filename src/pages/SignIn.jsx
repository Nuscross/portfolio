const SignIn = () => {

  const handleSubmit = () => {

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
            <input type="text" placeholder="Please insert your username." />
          </div>
          <div className="form-box">
            <label>Password</label>
            <input type="text" placeholder="Please insert your password." />
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