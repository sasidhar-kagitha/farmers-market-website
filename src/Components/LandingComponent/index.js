import {Component} from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import { ShoppingBasket, Leaf, Truck, PiggyBank } from 'lucide-react';
import NavBar from '../NavBar'
import Footer from '../Footer'

import {Link} from 'react-router-dom'

import './index.css'

class LandingComponent extends Component{

    render()
    {
       const jwtToken = Cookies.get('jwt_token') 
       if(jwtToken==undefined)
       {
       return (<> 
       <NavBar />
       <div className="farmers-market-landing-page-bg-container"> 
       
         <div className="farmers-market-landing-page-container">
             <div className="farmers-market-landing-page-card">
                <h1 className="farmers-market-landing-page-card-heading">
                Fresh From the Farm to Your Home
                </h1>
                <p className="farmers-market-landing-page-card-desc">Enjoy farm-fresh, organic produce directly from trusted local farmers — no middlemen, no hidden charges. Get the best quality vegetables, fruits, dairy, and more at fair prices. Shop smart, eat healthy, and save more with every order.</p>
                <div className="farmers-market-landing-page-card-btn-container">
                  <Link to="/signup">
                  <button className="farmers-market-landing-page-card-btn">Sign Up</button>
                  </Link>
                  <Link to="/login"  >
                <button className="farmers-market-landing-page-card-btn-login">LogIn</button>
                </Link>
                </div>
                
             </div>
             <div className="farmers-market-landing-page-farmer-image-container">
             <img className="farmers-market-landing-page-farmer-image" src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Farmer with fresh produce"/>
            </div>
         </div>
         <section className="features">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Leaf size={32} />
            </div>
            <h3 className="feature-title">Organic & Fresh</h3>
            <p className="feature-description">
              All our produce is certified organic and harvested just hours before delivery to ensure maximum freshness.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Truck size={32} />
            </div>
            <h3 className="feature-title">Fast Delivery</h3>
            <p className="feature-description">
              We deliver your order within 24 hours of harvest, ensuring you get the freshest produce possible.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ShoppingBasket size={32} />
            </div>
            <h3 className="feature-title">Wide Selection</h3>
            <p className="feature-description">
              From seasonal fruits to exotic vegetables, we offer a diverse range of farm-fresh produce.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <PiggyBank size={32} />
            </div>
            <h3 className="feature-title">Fair Prices</h3>
            <p className="feature-description">
              By cutting out the middlemen, we offer fair prices to both farmers and consumers.
            </p>
          </div>
        </div>
      </section>
      <section className="categories">
        <h2 className="section-title">Explore Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <img 
              src="https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Fresh vegetables" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Vegetables</h3>
              <Link to="/products/vegetables" className="category-link">Explore</Link>
            </div>
          </div>
          
          <div className="category-card">
            <img 
              src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Fresh fruits" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Fruits</h3>
              <Link to="/products/fruits" className="category-link">Explore</Link>
            </div>
          </div>
          
          <div className="category-card">
            <img 
              src="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Dairy products" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Dairy</h3>
              <Link to="/products/dairy" className="category-link">Explore</Link>
            </div>
          </div>
          
          <div className="category-card">
            <img 
              src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Fresh herbs" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Herbs</h3>
              <Link to="/products/herbs" className="category-link">Explore</Link>
            </div>
          </div>

          <div className="category-card">
            <img 
              src="https://ts3.mm.bing.net/th?id=OIP.WzmocWmoM_0sABqGiHULeAHaFj&pid=15.1" 
              alt="Farm sheep" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Sheeps</h3>
              <Link to="/products/sheep" className="category-link">Explore</Link>
            </div>
          </div>

          <div className="category-card">
            <img 
              src="https://th.bing.com/th/id/OIP.FBftjhDaCQBhUCskdLhPTAHaJS?w=146&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              alt="Farm cocks" 
              className="category-image"
            />
            <div className="category-content">
              <h3 className="category-title">Roosters</h3>
              <Link to="/products/cocks" className="category-link">Explore</Link>
            </div>
          </div>
        </div>
      </section>
      
       </div>
       <Footer /></>)
       }
       
        return <Navigate to="/home" replace />
         
       
    }
}

export default LandingComponent