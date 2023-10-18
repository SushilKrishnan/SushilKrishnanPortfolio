import React, { Component } from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Home.css'

export class Home extends Component {
  render() {
    return (
      <div className='home' id='home'>
        <div className='inner'>
          <div className='left'>
            <TypeAnimation sequence={[
              "Hello!",
              1200,
              "नमस्ते!",
              1200,
              "வணக்கம்!",
              1200,
              "నమస్కరం!",
              1200,
            ]}
            speed={10}
            repeat={Infinity}
            style={{ fontSize: '5vw', paddingTop:"5vh", textAlign:"left", paddingLeft:"2vw", paddingBottom:"0", margin: "0", color:"#32502E" }}
            />
            <h1 className='name'>I'm Sushil Krishnan</h1>
            <p className='con'>A computer science student with a passion for problem-solving and innovation. Seeking a position where I can use my skills and knowledge to make a positive impact on the world.</p>
          </div>
          <div className='right'>
            <img src={require("../components/Img/Sus.jpg")} className='img'></img>        
          </div>
        </div>
      </div>
    )
  }
}

export default Home
