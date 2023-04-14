import React from 'react'
import bg from './images/bg.jpeg'
import Productlist from '../Productlist/Productlist'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="Home-img">
        <div className="card bg-dark text-dark border-0">
          <img src={bg} className="card-img" alt="image" height='560px' />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">LATEST ARRIVALS</h5>
              <Link to='/products' style={{textDecoration:'none'}}>
              <p className="card-text lead fs-2 text-dark">SHOP NOW</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home