// Write your JS code here
import Cookies  from 'js-cookie'
import './index.css'

import { Navigate, Link } from 'react-router-dom'

import {Component} from 'react'

import { WithNavigation } from '../../WithNavigation'

import Footer from '../Footer'

import NavBar from '../NavBar'

class LoginForm extends Component {
  state = {username:'',password:'',errorMessage:'',error:false}
  
  onChangeUserName = (event)=>{
    this.setState({username:event.target.value})
  }

  onChangePassword = (event)=>{
    this.setState({password:event.target.value})
  }

  onLoginFailure = (errorMsg)=>{
    this.setState({error:true,errorMessage:errorMsg})
  }

  onLoginSuccess = (jwtToken)=>{
    console.log(jwtToken)
    Cookies.set('jwt_token',jwtToken,{expires:1})
    this.props.navigate('/home',{replace:true});
  }

  onLogin = async(event)=>{

    event.preventDefault();
    const {username,password} =this.state

    const userDetails = {
      userName:username,
      password,
    }
 
    const options = {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(userDetails)
    }
    

    const response = await fetch('https://farmers-market-api-twdu.onrender.com/login',options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if(response.ok)
    {
      this.onLoginSuccess(data.jwt_token)
    }
    else{
      this.onLoginFailure(data.error)
    }

  }

  render() {
    const {username,password,errorMessage,error} =this.state 
    
    const jwtToken = Cookies.get('jwt_token') 
    if(jwtToken==undefined)
    {
      return(<>
      <NavBar />
      <div className="login-page">
        <div className="login-container">
          <div className="login-image-container">
            <img 
              src="https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Farmer with produce" 
              className="login-image" 
            />
          </div>
          
          <div className="login-form-container">
            <div className="login-header">
              <img 
                src="https://media.istockphoto.com/id/1127129190/vector/farmers-market-lettering.jpg?s=612x612&w=0&k=20&c=jkIA-n_2t22AZ0Kl3rgWDJy0CFG2mfLdmyk27JHJgdw=" 
                alt="Farmers Market Logo" 
                className="login-logo" 
              />
              <h1 className="login-title">Welcome Back</h1>
              <p className="login-subtitle">Login to access fresh farm products</p>
            </div>
            
            <form className="login-form" >
            <div className="input-container">
              <label className="label-style" htmlFor="user-name">
                USERNAME
              </label>
              <input
                className="input-style"
                id="user-name"
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="input-container">
              <label className="label-style" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="input-style"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              
              {error && <div className="login-error">{errorMessage}</div>}
              <button className="btn" onClick={this.onLogin}>Login</button>
              
              <div className="login-footer">
                <p>Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link></p>
              </div>
            </form>
          </div>
        </div>
        
        
      </div>
      <Footer /></>)
    
  }
  return <Navigate to='/home' replace />
  }
}

export default WithNavigation(LoginForm)
