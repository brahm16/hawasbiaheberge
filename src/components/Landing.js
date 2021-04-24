import React, { useState, useEffect, Component } from "react";

import { NavLink, Redirect } from "react-router-dom";
import { getCookie } from "../helpers/auth";

let url1 = "http://localhost:5000/map";
let url2 = "http://localhost:5000/intro";

let url = "http://localhost:3000/login";
let url4 = "http://localhost:3000/";

const deplace = () => {
  window.location.replace(url);
};
const deplace1 = () => {
  window.location.replace(url1);
};
/*
const [isToggled, setIsToggled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = React.useCallback(() => setIsToggled(!isToggled));

*/

const user = getCookie("user");
const username = getCookie("username");

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleMap = this.handleMap.bind(this);
    this.handleIntro = this.handleIntro.bind(this);
  }

  handleMap() {
    console.log("aaaaaaaaaaaaa");
    window.location.replace(url1);
  }
  handleIntro() {
    console.log("aaaaaaaaaaaaa");
    window.location.replace(url2);
  }
  render() {
    const style1 = {
      backgroundImage: "url('img/zagh/0.jpg')",
    };
    const style2 = {
      backgroundImage: "url('img/zriba.jpg')",
    };
    const style3 = {
      backgroundImage: "url('img/temple.jpg')",
    };
    return (
      <>
        <div className="preloader">
          <div className="mainpreloader">
            <span></span>
          </div>
        </div>

        <div id="wraperexpedition">
          <div className="bgexpedition">
            <div id="owl-slider-home" className="owl-carousel">
              <div className="item imgbg" style={style1}></div>
              <div className="item imgbg" style={style2}></div>
              <div className="item imgbg" style={style3}></div>
            </div>
          </div>
        </div>
        <div className="overlay-home noselect"></div>

        <div
          id="logo"
          className="brand-expedition noselect animfadeInLeft"
          data-time="0"
        >
          <a href="index.html">
            <h3>Hawas Bia</h3>
          </a>
        </div>


        <div className="contentexpedition">
          <div className="row">
            <div className="col-md-12">
              <h1 className="animfadeInUpBig" data-time="1500">
                Zaghouane
              </h1>
              <div
                className="devider-center animfadeInUpBig"
                data-time="1700"
              ></div>
              <div id="slidertext" className="animfadeInUpBig" data-time="500">
                <div className="main-text">Water temple</div>
                <div className="main-text">Zaghouan</div>
                <div className="main-text">Oudhna</div>
              </div>

              <div  className="animfadeInUpBig" data-time="2100">
                <div>
                <span><img src="/marker1.png" style={{width: "3rem",color:"orange"}} /></span>
                <span id="curentLoc" style={{color:"orange"}} ></span>

                </div>
                    

                   
          
              </div>

              <div className="btn-home animfadeInLeft" data-time="2100">
                <a className="link-className" onClick={this.handleMap}>
                  Take tour
                </a>
              </div>
              <div className="btn-home animfadeInRight" data-time="2400">
                <a className="link-className" onClick={this.handleIntro}>
                  Discover
                </a>
              </div>
            </div>

            <div
              id="subwrap"
              className="white-popup-block mfp-hide animbouncefall"
              data-time="0"
            >
              <h5>Please fill your email below</h5>
              <form
                id="subscribe"
                action="http://on3-step.com/tf/expedition/expedition-v1/expedition-v2/subscribe.php"
                method="post"
                name="subscribe"
              >
                <input
                  className="subscribfield subscribeemail"
                  id="subscribeemail"
                  name="subscribeemail"
                  type="text"
                />
                <button id="submit-2" className="btn-form" type="submit">
                  Subscribe
                </button>
              </form>
              <div className="subscribesuccess">
                Thank you for fill your email
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bottom">
          <div id="opengal">
            <i className="fa fa-angle-up"></i>
            <span>All Circuit</span>
          </div>
        </div>

        <div className="bottom-option">
          <div className="nav-bottom-close">
            <span>close</span>
            <i className="fa fa-angle-down"></i>
          </div>
          <div id="owl-gal" class="owl-carousel">
                
                <div class="item">
                 <div class="port big-img">
                 <div class="hovereffect">
                 <a href="/img/archeologie.jpg">
                 <img class="gray-color" src="/img/archeologie.jpg" alt="imageportofolio" />
                 <div class="overlay">
                 <h2>Archeologie Circuit</h2>
                 <span class="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 <div class="item">
                 <div class="port big-img">
                 <div class="hovereffect">
                 <a href="/img/romain.jpg">
                 <img class="gray-color" src="/img/romain.jpg" alt="imageportofolio" />
                 <div class="overlay">
                 <h2>Romain Circuit</h2>
                 <span class="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 <div class="item">
                 <div class="port big-img">
                 <div class="hovereffect">
                 <a href="/img/andalous.jpg">
                 <img class="gray-color" src="/img/andalous.jpg" alt="imageportofolio" />
                 <div class="overlay">
                 <h2>Andalous Circuit</h2>
                 <span class="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 <div class="item">
                 <div class="port big-img">
                 <div class="hovereffect">
                 <a href="/img/soufi.jpg">
                 <img class="gray-color" src="/img/soufi.jpg" alt="imageportofolio" />
                 <div class="overlay">
                 <h2>Circuit Soufi</h2>
                 <span class="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 <div class="item">
                 <div class="port big-img">
                 <div class="hovereffect">
                 <a href="/img/portofolio/5.jpg">
                 <img class="gray-color" src="/img/portofolio/5.jpg" alt="imageportofolio" />
                 <div class="overlay">
                 <h2>Personal circuit</h2>
                 <span class="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 
                 
                
 
  </div>
 
        </div>
      </>
    );
  }
}
