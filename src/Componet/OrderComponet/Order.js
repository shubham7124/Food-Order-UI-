import React from 'react'
import "./Order.css"

export default function Order() {
  return (
    <div>
       <div className="container-fluid" id="OrderFood"  style={{height: '100%'}}>
            <h3 className="heading " style={{paddingTop:'6%', paddingBottom:'2%'}}>Order Now</h3>
      
            <div className="containerCard" >
                <div className="card p-3 shadow-lg  ">
                  <img src="image/img2.jpg" alt="Image 1"/>
                  <div className="card-content">
                    <h5>PIZZA</h5>
                    <p>Lorem Ipsum has been the
                        industry's standard dummy text</p>
                  </div>
                </div>
              
                <div className="card p-3 shadow-lg">
                  <img src="image/img3.jpg" height="200px"  alt="Image 2"/>
                  <div className="card-content">
                    <h5>PASTA
                    </h5>
                    <p>Lorem Ipsum has been the
                        industry's standard dummy text</p>
                  </div>
                </div>
              
                <div className="card p-3 shadow-lg ">
                  <img src="image/img4.jpg" height="200px"  alt="Image 3"/>
                  <div className="card-content">
                    <h5>BURGER</h5>
                    <p>Lorem Ipsum has been the
                        industry's standard dummy text</p>
                  </div>
                </div>
              </div>
              <div className="button-container">
              <button type="button" className="btn btn-primary h-75 w-25  btn-lg active">Order</button>
              </div>
        
        </div>
    </div>
  )
}
