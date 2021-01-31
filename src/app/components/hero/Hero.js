import React from "react";
import "./Hero.css";
import { Button } from "../button/Button";
import video from "./../../assets/videos/video-3.mp4"

export const Hero = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>BEAUTIFUL PLACES</h1>
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
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
