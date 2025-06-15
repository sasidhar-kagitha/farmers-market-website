import './index.css'
import { Navigate,useNavigate } from 'react-router-dom'
import Cookies  from 'js-cookie'
import NavBar from '../NavBar'
import { useState,useEffect } from 'react'
import { DotLoader,ClipLoader } from 'react-spinners'

import { FaLeaf } from 'react-icons/fa';


const Home =()=>{
    const jwtToken = Cookies.get('jwt_token')
    const apiStatusConstValue = {
      initial:'INITIAL',
      success:'SUCCESS',
      failure:'FAILURE',
      inProgress:'IN_PROGREES'
    }

    const [products,setProducts]=useState([]);
    const [error,setError] = useState("");
    const [apiStatus,setApiStatus] = useState(apiStatusConstValue.initial)

    const getProducts=async()=>{
      setApiStatus(apiStatusConstValue.inProgress)
      const options={
        headers:{
          Authorization:`Bearer ${jwtToken}`,
        }
      
      }
      const response = await fetch('https://farmers-market-api-twdu.onrender.com/todayPicks',options) 
      const data = await response.json();
      console.log(response)
      if(response.ok)
      {
        
        const formattedData = data.map(item=>({
          productId:item.product_id,
          title:item.title,
          imgUrl:item.img_url,
          location:item.location,
          name:item.name,
          price:item.price,
          unit:item.unit,
          category:item.category
        }))
        setProducts(formattedData)
        setApiStatus(apiStatusConstValue.success)
      }
      else{
        setError(data.error);
        setApiStatus(apiStatusConstValue.failure)
      }
      console.log(data)
    }

    useEffect(()=>{
      getProducts();
    },[]);

    const navigate = useNavigate()

    const onLogoutUser = ()=>{
        Cookies.remove('jwt_token')
        navigate('/')

    }

    if(jwtToken==undefined)
    {
      return <Navigate to="/" replace/>
    }
    
    console.log(products);

    const onLoadingView=()=>(<div className='loader-view-container'>
        <ClipLoader color='#2596be' size={40} />
    </div>)

    const onFailureView=()=>(
      <div className='failure-veiw-container'>
        <img className='failure-image' src="https://tse4.mm.bing.net/th?id=OIP.FwQQAcQlFytPx1d4WGgtagHaHa&pid=Api&P=0&h=180" alt="unauthorized" />
        <p className="error-message">{`${error}`}</p>
      </div>
    )

    const displayProductItem=(item)=>(
      <div className='todays-product-container' key={item.id}>
        <div className='tag-container'>
        <img className="img" src={item.imgUrl} alt="img" />
        <p className='tag'><FaLeaf size={15}/>Organic</p>
        </div>
        <h3 className='card-name'>{item.name}</h3>
        <p className='card-title'>{item.title}</p>
        <p className='price'>{item.category!=='fruit'?`Rs:${item.price}/-`:`Rs:${item.price}/${item.unit}`}</p>
        <button className='today-item-btn'>Add to Cart</button>

      </div>
    )

    const onSuccessView=()=>(
      <div className='success-view-container'>
        {products.map(item=>displayProductItem(item))}
      </div>
    )

    const displayTheTodayPicks=()=>{
    switch(apiStatus)
    {
    case apiStatusConstValue.inProgress:  
         return onLoadingView()
    case apiStatusConstValue.failure:
         return onFailureView()
    case apiStatusConstValue.success:
      return onSuccessView()
    default:
      return null
    }
    }
    
    return(
    <>
    <NavBar />
    <div className="home-page-bg-container">
      <div className="home-page-welcome-container">
          <h1 className="home-page-welcome-container-heading">Welcome to Farmers Market!</h1>
          <p className="home-page-welcome-container-desc">Browse today's fresh picks from local farms</p>
          <div className='home-page-welcome-btn-container'>
            <button className='home-page-welcome-btn'>Browse All</button>
            <button className='home-page-welcome-btn-outline'>View Market</button>
          </div>
      </div>
      <section className="today-product-section">
        <header>
          <h2>Today's Picks</h2>
          <hr className='line-styled'/>
          <p>Fresh harvested just for you.</p>
        </header>
        {displayTheTodayPicks()}
      </section>
      <section className='category-section'>
        <div>
           <h1>Categories</h1>
           <p>Explore our wide sections.</p>
        </div>    

      </section>
</div></>)}

export default Home