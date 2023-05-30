import React from 'react'
import "./home.css"
import Blogcard from '../components/Blogcard'
import img1 from "./../assets/img1.png"
import img2 from "./../assets/img2.png"
import img3 from "./../assets/img3.png"

function Home() {
  return (
    <div className="home">

        <div className="banner">
            <h2>Minimal blog template for <br /> creative expressions</h2>
            <p>100% customisable and SEO-friendly blog template for personal and commercial purposes.</p>
        </div>

        <div className="articles p-5 ">
            <div className="d-flex justify-content-between align-items-center w-50 m-auto ">
                <p>Daily Digest</p>
                <button className="btn p-1 bg-white">view All</button>
            </div>

            <div className="article">
              <Blogcard title="Obi is in court...."  pic={img1}/>
              <Blogcard title="Chelsea is relegating......"  pic={img2}/>
              <Blogcard title="Life as a programmer"  pic={img3}/>
            </div>
        </div>
    </div>
  )
}

export default Home