import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdmin } from "../management/api";

const Admin = () => {

  const token = localStorage.getItem('accessToken');

  const [adminUser,setAdminUser] = useState([]);

  useEffect(()=>{
    fetchAdmin();
  },[])

  const fetchAdmin = async () => {
    const dataResponse = await getAdmin(token);
    setAdminUser(dataResponse);
  } 

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = "/sign-in";
  }

  const { firstName, lastName, image } = adminUser;

  return (
    <div className="sign-in admin">
      <div className="sign-in-overlay"></div>
      <div className="admin-content">
        <p className="title">Login Successfully</p>
        <img alt="" src={image} className="avatar" />
        <p>Welcome <span className="text-white">{firstName} {lastName}</span> to coffee blend admin page.</p>
        <Link to="/" className="btn-back btn-primary" onClick={handleLogout}>Log Out</Link>
      </div>
    </div>
  )
  
}

export default Admin;