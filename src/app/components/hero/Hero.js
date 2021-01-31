import React from "react";
import "./Hero.css";
import { Button } from "../button/Button";

export const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>BEUTIFUL PLACES</h1>
      <p>Website about the world!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <a href='//google.pl'></a>
          WATCH TRILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
