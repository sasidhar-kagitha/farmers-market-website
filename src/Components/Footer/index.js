import {Component} from 'react'
import { FaFacebookF ,FaInstagram,FaTwitter} from "react-icons/fa";

import './index.css'

class Footer extends Component{
    render()
    {
        return (<div className='footer'> 
          <div className="footer-container">
             <div className="footer-farmer-market-card-container">
                <h1 className="footer-farmer-market-card-heading">Farmers Market</h1>
                <p className="footer-farmer-market-card-desc">Connectiong local farmers with health-conscious consumers.Fresh produce direct from the farm to your table.</p>
                <div className="footer-card-icons-container">
                   <FaFacebookF size={30} color='#ffffff' />
                    <FaInstagram size={30} color="#ffffff" />
                    <FaTwitter size={30} color="#ffffff" />
                </div>
             </div>
             <div className='quick-links-card'>
                <h1 className="footer-farmer-market-card-heading">Quick Links</h1>
                <ul className="links-container">
                   <li className='footer-farmer-market-card-desc'>Home</li>
                  <li className='footer-farmer-market-card-desc'>Products</li>
                  <li className='footer-farmer-market-card-desc'>About Us</li>
                 <li className='footer-farmer-market-card-desc'>Contact</li>
                </ul>

             </div>
             <div className='quick-links-card'>
                <h1 className="footer-farmer-market-card-heading">Categories</h1>
                <ul className="links-container">
                   <li className='footer-farmer-market-card-desc'>Roosters</li>
                  <li className='footer-farmer-market-card-desc'>Fruits</li>
                  <li className='footer-farmer-market-card-desc'>Vegetables</li>
                 <li className='footer-farmer-market-card-desc'>Sheeps</li>
                </ul>
             </div>
          </div>
          
        <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Farmers Market. All rights reserved.</p>
      </div>
        </div>)
    }
}


export default Footer