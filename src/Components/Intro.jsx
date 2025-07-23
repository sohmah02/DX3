import React from "react";
import "../App.css";

function Intro() {
  return (
    <div className="intro">
      <div id="intro">
        <h1>The best brand for you?</h1>
        <p>
          Without a doubt DX-3 brand should be your go-to brand for designer and
          custom clothing. We have everything you want and can make anything you
          need.
        </p>
        <button id="home">
          <a href="/about">Learn more</a>
        </button>
      </div>
      <div>
        <img src="/DX-3/corduroy.jpg" alt="Corduroy" className="intro-pic" />
      </div>
    </div>
  );
}

export default Intro;
