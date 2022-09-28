import React from "react";
import "./About.css";
import astro from "../assets/astro.jpeg";
import planet from "../assets/planet.png";
// import image from "../../assets/my.svg";
export default function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="para">
          <h4 className="font-bold text-6xl">
            Hey there ! <img className="astro" src={astro} alt="logo" />
          </h4>
          <div className="sub">
            <h1>
              I am <b>Manisha</b>, student of GITA Autonoums college{" "}
            </h1>
            <h1>persuing B-Tech in Computer Science Engineering.</h1>
            <h1>I live in Bhubaneswar,Odisha,India</h1>
            <h1>I am a hustler and coding enthusiast !</h1>
          </div>
        </div>
      </section>
      <div>
        <img className="lg" src={planet} alt="logo" />
      </div>
    </div>
  );
}
