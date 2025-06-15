import {Component} from 'react'

import { Navigate,useNavigate,Link } from 'react-router-dom'
import { FaBars,FaTimes,FaSignInAlt,FaSignOutAlt } from 'react-icons/fa';
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie';

import './index.css'






const NavBar = ()=>

    {
      const jwtToken = Cookies.get('jwt_token');
      const navigate = useNavigate();
      const  onLogOut=()=>{
    console.log('g');
    Cookies.remove('jwt_token');
    navigate('/');
  }
        return (<nav className='nav-bar'>
           <div className="nav-bar-container">
               <div className='nav-bar-logo-container'>
                  <img className="logo" 
                  src="https://media.istockphoto.com/id/1127129190/vector/farmers-market-lettering.jpg?s=612x612&w=0&k=20&c=jkIA-n_2t22AZ0Kl3rgWDJy0CFG2mfLdmyk27JHJgdw=" 
                  alt="logo" />
                  <span>Farmers Market</span>
               </div>
               <div className="navbar-sm">
                <Popup
                modal
                trigger={<button>
                  <FaBars size={50} /> 
                </button>}
                contentStyle={{width:"100%",padding:"1rem"}}
                overlayStyle={{backgroundColor:'#ffffff'}}
                >
                 {close=>
                  (<div className="modal-container">
                    <button className="close-button" onClick={()=>{close()}}>
                      <FaTimes size={24} />
                    </button>
                    <ul className="nav-link-sm">
                      <Link to="/" className="nav-link" onClick={()=>{close()}}>
                  <li>Home</li>
                </Link>
                <Link to="/products" className="nav-link" onClick={()=>{close()}}>
                  <li>Products</li>
                </Link>
                <Link to="/cart" className="nav-link" onClick={()=>{close()}}>
                  <li>Cart</li>
                </Link>
                  
                  <li>
                    {jwtToken===undefined?
                  <Link to="/login">
                  <button className="login-sm-btn"><FaSignInAlt size={25} />Log In</button></Link>:
                  <button className="login-sm-btn" onClick={onLogOut}><FaSignOutAlt size={24} />Log Out</button>
                }</li>
                      
                    </ul>
                  </div>)
                 }

                 
                </Popup>
                
               </div>
               <ul className="nav-bar-links-container">
                <Link to="/" className="nav-link" >
                  <li>Home</li>
                </Link>
                <Link to="/products" className="nav-link">
                  <li>Products</li>
                </Link>
                <Link to="/" className="nav-link">
                  <li>Cart</li>
                </Link>
                  
                
                <li>
                    {jwtToken===undefined?
                  <Link to="/login">
                  <button className="login-sm-btn"><FaSignInAlt size={25} />Log In</button></Link>:
                  <button className="login-sm-btn" onClick={onLogOut} ><FaSignOutAlt size={24} />Log Out</button>
                }</li>
               </ul>
           </div>
        </nav>)
    }


export default NavBar