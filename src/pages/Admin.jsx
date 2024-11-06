import { Link } from "react-router-dom";

const Admin = () => {

  return (
    <div className="sign-in admin">
      <div className="sign-in-overlay"></div>
      <div className="admin-content">
        <p className="title">Login Successfully</p>
        <p>Welcome to coffee blend login page.</p>
        <Link to="/" className="btn-back btn-primary">Log Out</Link>
      </div>
    </div>
  )
  
}

export default Admin;