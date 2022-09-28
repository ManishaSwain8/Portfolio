// import React from "react";
// import "./Meter.css";
// export default function Meter() {
//   return (
//     <div>
//       <div class="skill2">
//         <div class="outer">
//           <div class="inner">
//             <div id="num">80%</div>
//           </div>
//         </div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.1"
//           width="240px"
//           height="240px"
//         >
//           <defs>
//             <linearGradient id="GradientColor">
//               <stop offset="0%" stop-color="#e91e63" />
//               <stop offset="100%" stop-color="#673ab7" />
//             </linearGradient>
//           </defs>
//           <circle cx="140" cy="120" r="70" stroke-linecap="round" />
//         </svg>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "./Meter.css";
export default function Meter() {
  return (
    <div classNmae="skill">
      <a>
        <img
          className="img1"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png"
        ></img>
        <p className="desc">
          <b>C</b> is a general-purpose computer programming language.
        </p>
      </a>
      <a>
        <img
          className="img2"
          src="https://www.pngall.com/wp-content/uploads/2016/05/Python-Logo-Free-Download-PNG.png"
        ></img>
        <p className="desc">
          <b>PYTHON</b> is an interpreted, object-oriented, high-level
          programming language with dynamic semantics
        </p>
      </a>
      <a>
        <img
          className="img3"
          src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
        ></img>
        <p className="desc">
          <b>JAVA</b> is a general-purpose, class-based, object-oriented
          programming language designed for having lesser implementation
          dependencies.
        </p>
      </a>
      <a>
        <img
          className="img4"
          src="https://d12i7q49526cmu.cloudfront.net/media/original_images/React_Logo.png"
        ></img>
        <p className="desc">
          <b>REACT</b> is a a development server that uses Webpack to compile
          React, JSX, and ES6, auto-prefix CSS files.
        </p>
      </a>
      <a>
        <img
          className="img5"
          src="https://cdn.dribbble.com/users/66221/screenshots/1655604/media/e4330d62b9e74eaf987923c8f9cbf51d.png?compress=1&resize=400x300&vertical=top"
        ></img>
        <p className="desc">
          <b> CSS</b> stands for Cascading Style Sheets · CSS describes how HTML
          elements are to be displayed on screen, paper, or in other media
        </p>
      </a>
      <a>
        <img
          className="img6"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        ></img>
        <p className="desc">
          <b>JAVASCRIPT</b> is a dynamic computer programming
          language.JavaScript can update and change both HTML and CSS.
        </p>
      </a>
      <a>
        <img
          className="img7"
          src="https://www.ujudebug.com/wp-content/uploads/2022/07/html-logo-transparent.png"
        ></img>
        <p className="desc">
          <b> HTML</b> stands for Hyper Text Markup Language · HTML is the
          standard markup language for creating Web pages
        </p>
      </a>
    </div>
  );
}
