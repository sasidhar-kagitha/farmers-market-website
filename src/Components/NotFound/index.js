import './index.css' 
import { Home } from 'lucide-react';
import Footer from '../Footer'
import NavBar from '../NavBar';

const NotFound = ()=> (<>
     <NavBar />
    <div className="not-found-page">  
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-description">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <button>
            <Home size={18} /> Go Back Home
          </button>
        </div>
        <div className="not-found-image-container">
          <img 
            src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg" 
            alt="404 Error Illustration" 
            className="not-found-image" 
          />
        </div>
      </div>
      
      
    </div>
    <Footer /></>
  )

export default NotFound