import './index.css'  
import {Component} from 'react'
import Cookies from 'js-cookie'
import { WithNavigation } from '../../WithNavigation'
import { Navigate, replace,Link } from 'react-router-dom'
import Footer from '../Footer'
import NavBar from '../NavBar'


class SignUp extends Component{
    
    state={username:'',password:'',error:false,errorMsg:'',confirmPassword:''}

    onChangeUsername=(event)=>{
        this.setState({username:event.target.value})
    }

    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
    onChangeConfirmPassword=(event)=>{
        this.setState({confirmPassword:event.target.value})
    }

    onSubmit=async(event)=>{
        event.preventDefault()
        if(this.state.username===''||this.state.password==''||this.state.confirmPassword=='')
        {
            this.setState({errorMsg:'please fill all fields!!',error:true})

        }
        else if(this.state.confirmPassword!==this.state.password)
        {
            this.setState({errorMsg:'confirmpassword isnt match',error:true})
        }
        else{
            this.setState({error:false,errorMsg:''})
            const userDetails = {userName:this.state.username,password:this.state.password}
            const options = {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(userDetails)
            }

            const response = await fetch('https://farmers-market-api-twdu.onrender.com/register',options)
            console.log(response)
            const data = await response.json()
            console.log(data)
            if(response.ok)
            {   
                this.setState({username:'',password:''})
                this.props.navigate('/login',{replace:true})
            }
            else{
                this.setState({error:true,errorMsg:data.error})
            }
        }
    }
    
    render()
    {

        const {username,password,confirmPassword,error,errorMsg} = this.state

        const token = Cookies.get('jwt_token')

        if(token!==undefined)
        {
            return <Navigate to="/home"/>
        }
        return (<>
           <NavBar />
            <div className="signup-page">
              <div className="signup-container">
                <div className="signup-content">
                  <h1 className="signup-title">Create Your Account</h1>
                  <p className="signup-subtitle">Join our community of fresh food lovers</p>
                  
                  <div className="signup-card">
                    <div className="signup-card-header">
                      <h2 className="signup-card-title">Sign Up</h2>
                      <img 
                        src="https://media.istockphoto.com/id/1127129190/vector/farmers-market-lettering.jpg?s=612x612&w=0&k=20&c=jkIA-n_2t22AZ0Kl3rgWDJy0CFG2mfLdmyk27JHJgdw=" 
                        alt="Farmers Market Logo" 
                        className="signup-logo" 
                      />
                    </div>
                    
                    <form className="signup-form">
                    <div className="input-field-container">
                                <label>UserName</label>
                                <input type="text" placeholder='Enter userName' value={username}  onChange={this.onChangeUsername} required/>
                            </div>
                            <div className="input-field-container">
                                <label>Password</label>
                                <input type="password" placeholder='Enter Password'  value={password} onChange={this.onChangePassword} required/>
                            </div>
                            <div className="input-field-container">
                                <label>Confirm Password</label>
                                <input type="password" onChange={this.onChangeConfirmPassword} placeholder='Enter Password Again' required value={confirmPassword}/>
                            </div>
                      
                      {error && <div className="signup-error">{errorMsg}</div>}
                      <button className='sign-up-btn' onClick={this.onSubmit}>Submit</button>
                      
                      <div className="signup-footer">
                        <p>Already have an account? <Link to="/login" className="login-link">Log in</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className="signup-image-container">
                  <img 
                    src="https://images.pexels.com/photos/8988363/pexels-photo-8988363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Person using laptop" 
                    className="signup-image" 
                  />
                </div>
              </div>
              
              
            </div>
            <Footer /></>
          );
        
        
        }
}

export default WithNavigation(SignUp)