import React from 'react'
import "./Home.css"

export default function Homepage() {
  return (
    <div>
        <div className="container  background-div my-2 py-3  " id="home">
            <div className="content-div">
                <h1>LOREM IPSUM</h1>
                <p style={{fontSize:'20px'}}>Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    </div>
  )
}
