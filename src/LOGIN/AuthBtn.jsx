import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
const AuthBtn = () => {

  const authAdmin = () => {
    const user = localStorage.getItem("Admin");
    if (user) return true
    else return false
  };
  const authUser = () => {
    const user = localStorage.getItem("Guest");
    if (user) return true;
    else return false;
  };

  const location = useNavigate()

  const logOutAdmin = () => {
    localStorage.removeItem("Admin");
    window.location.reload();
    location('/register') 
  };

  const logOutUser = () => {
    localStorage.removeItem("Guest");
    window.location.reload();
    location('/register') 
  };
  const admin = JSON.parse(localStorage.getItem("Admin"));
  const user = JSON.parse(localStorage.getItem("Guest"));

  const btnForHeader = () => {
    if (authAdmin()) {
      return (
        <>

          <div className="btn-group">
            <button className="btn login-btn ms-3  dropdown-toggle fw-bolder fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
           {admin.name}
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start me-5">
              <LinkContainer to="/dashboard">
                <button className="btn dropdown-item fw-bolder bg-light" >Dashboard</button>
              </LinkContainer>
              <button className="dropdown-item fw-bolder" onClick={logOutAdmin} >  Logout  <LogoutIcon className='fs-5 login' /></button>
            </ul>
          </div>

        </>
      );
    } else if (authUser()) {
      return (
        
        <div className="btn-group">
        <button className="btn login-btn ms-3  dropdown-toggle fw-bolder fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
       Hi, {user.firstname}
        </button>
        <ul className="signup-dropdown dropdown-menu dropdown-menu-end dropdown-menu-lg-start ">
          <button className="dropdown-item fw-bolder mt-2" onClick={logOutUser} >  Logout  <LogoutIcon className='fs-5 login' /></button>
        </ul>
      </div>

      );
    }
    else {
      return <LinkContainer to="/my-account">
        <button className='btn login-btn  ms-3 '><PermIdentityOutlinedIcon className='login fs-2' /></button>
      </LinkContainer>
    }
  };
  return (
    <>
      {btnForHeader()}
    </>
  )

}

export default AuthBtn