import "./Contact.css";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
export default function Project() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_evvvejp",
        refForm.current,
        "pkMzvTP1UQ8GRJAdf"
      )
      .then(
        () => {
          alert("message sent!");
          window.location.reload(false);
        },
        () => {
          alert("message failed to sent!");
        }
      );
  };
  return (
    <div>
      <section className="contact" id="contact">
        <div className="cont">
          <h2 className="text-white font-bold text-5xl text-left mt-15">
            Let's
            <h2>connect!</h2>
          </h2>
          <form className="form" ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                ></input>
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Email ID"
                  name="user_email"
                  required
                ></input>
              </li>
              {/* <li>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              ></input>
            </li> */}
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
            </ul>
            <button className="but" type="submit" value="Send">
              Submit
            </button>
          </form>
          <div className="info-map">
            Manisha Swain
            <br />
            Odisha,
            <br />
            India
            <br />
            <span>manishaswain911@gmail.com</span>
          </div>
          <div className="my-wrap">
            <div className="my-wrap1">
              <MapContainer center={[20.238919, 85.760919]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[20.238919, 85.760919]}>
                  <Popup>
                    Manisha lives here, come over for a cup of coffee :)
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="contact">
            <a className="con1" href="">
              <BsGithub />
            </a>
            <a className="con2" href="">
              <GrLinkedin />
            </a>
            <a className="con3" href="">
              <FaInstagramSquare />
            </a>
            <a className="con4" href="">
              <BsFacebook />
            </a>
          </div>
          <p className="p">@ All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
