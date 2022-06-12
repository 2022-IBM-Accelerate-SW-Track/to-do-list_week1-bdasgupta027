import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg"; 


export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={profile_pic}
            alt="Profile Pic"
            ></img>
        </div> 
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Bhaswati Das Gupta</div>
          <div className="brief_description">
            <p> Hi! My name is Bhaswati Das Gupta. I'm currently a rising sophomore at UC Santa Cruz.
                Computer Science and minoring in Statistics. Some of my hobbies include playing the
               flute and dancing. In the future, I hope to go into machine learning or artificial 
               intelligence.</p> 
          </div>
        </div>
      </div>
      </div>
      
    )
  }
}

//<div>

