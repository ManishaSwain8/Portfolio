// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Meter from "./Meter";
import "./Exp.css";
export default function Experience() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  //   return (
  //     <div>
  //       {/* <div>
  //         <h2 className="text-white">skills</h2>
  //       </div> */}
  //       <div className="skill">
  //         <h2 className="text-white">skills</h2>
  //         <div className="ok">
  //           <Meter />
  //           <Meter />
  //           <Meter />
  //           <Meter />
  //           <Meter />
  //           <Meter />
  //           <Meter />
  //           <Meter />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div>
      <section className="experience" id="experience">
        <div className="skill">
          <h2 className="text-white font-bold text-4xl">SKILLS</h2>
          <br />
          <div className="ok">
            <Meter />
          </div>
        </div>
      </section>
    </div>
  );
}
