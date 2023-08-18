import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { LinkContainer } from 'react-router-bootstrap';

const AuthBtn = () => {

    const auth = () => {
        const user = localStorage.getItem("User");
        if (user) return true
        else return false
    };

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    };

    const btnForHeader = () => {
        if (auth()) {
            return (
                <>

                    <div className="btn-group">
                    <button className="btn login-btn ms-3  dropdown-toggle fw-bolder fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                           ADMIN
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start me-5">
                            <LinkContainer to="/admin">
                           <a className="dropdown-item fw-bolder bg-light" >  Admin Panel</a>
                            </LinkContainer>
                           <button className="dropdown-item fw-bolder" onClick={logOut} >  Logout  <LogoutIcon className='fs-5 login' /></button>
                        </ul>
                    </div>

                </>
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