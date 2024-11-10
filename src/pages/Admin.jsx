import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAdmin } from "../management/api";

const Admin = () => {

  const token = localStorage.getItem('accessToken');

  const navigate = useNavigate();

  const [adminUser,setAdminUser] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    } else {
      fetchAdmin();
    }
  }, [token, navigate]);

  useEffect(()=>{
    fetchAdmin();
  },[])

  const fetchAdmin = async () => {
    const dataResponse = await getAdmin(token);
    setAdminUser(dataResponse);
  } 

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate("/");
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