// import React from "react";
// export const = ({}) => {
//   return (
//     <div>
//       <div className="proj-imgbx">
//         <img src={} />
//         <div className="proj-title">
//           <h4>{}</h4>
//           <span>{}</span>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import "./Proj.css";
import meme from "../assets/meme.png";
import trip from "../assets/trip.png";
import calac from "../assets/calac.png";
import form from "../assets/form.png";
import godrej from "../assets/godrej.png";
import info from "../assets/info.png";
import tribute from "../assets/tribute.png";
import st from "../assets/st.png";
export default function Project() {
  return (
    <div>
      <section className="projects" id="projects">
        <div className="proj1">
          <h2 className="text-white font-bold text-4xl text-center mt-15">
            PROJECTS
          </h2>

          <div className="proj">
            <a>
              <img className="image" src={meme}></img>
              <p className="title">Meme Generator</p>
            </a>
            <a>
              <img className="image1" src={trip}></img>
              <p className="title">Make My Trip Clone</p>
            </a>
            <a>
              <img className="image2" src={calac}></img>
              <p className="title">Calculator Clone</p>
            </a>
            <a>
              <img className="image3" src={form}></img>
              <p className="title">Form Fill Up</p>
            </a>
            <a>
              <img className="image4" src={godrej}></img>
              <p className="title">Godrej Clone</p>
            </a>
            <a>
              <img className="image5" src={info}></img>
              <p className="title">Information Page</p>
            </a>
            <a>
              <img className="image6" src={tribute}></img>
              <p className="title">Tribute page</p>
            </a>
            <p className="title1">More coming ... stay tunned !</p>
          </div>
        </div>
      </section>
      <div>
        <img className="sat" src={st} alt="logo" />
      </div>
    </div>
  );
}
