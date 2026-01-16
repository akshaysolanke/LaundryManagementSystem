import React from "react";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div style={{backgroundColor:"#F4FCEE"}} className="section">
      {/* <div className="banner">
        <img src="" alt="" />
      </div> */}
      <div className="container ">
        <div className="m-0,p-0">
          <h3
            className="justify-content-center d-flex"
            style={{ fontFamily: "All Round Gothic", color: "#003A25" }}
          >
            LAUNDRY BELONGS IN A LAUNDROMAT
          </h3>
          <div  className="para1">
            <p>
            An average human spends between 12000 hours of their adult life in
            cleaning and managing their clothes. We have all grown up
          </p>
          <p>
            on a heavy dose of detergent commercials propagating the idea of
            ‘whiter the better’.
          </p>
          </div>
        </div>
        <div className="row pt-4 m-auto">
          <div className="col-12 col-lg-5 a_img">
            <img
              src="https://assets.ucleanlaundry.com/assets/images/about_img_11zon.webp"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-5 para ">
            <p>
              At Rutuja Drycleaners, we understand the importance of
              fresh, clean clothes, and we are committed to delivering
              outstanding results every time. Whether it’s everyday wear,
              delicate fabrics, or commercial laundry, our advanced cleaning
              technology and eco-friendly detergents ensure the highest standard
              of care. <br />  Why Choose Us? <br /> ✔Quality & Care–We treat every garment
              with the care & attention.  ✔Convenience – Enjoy
              hassle-free pickup and delivery services right at your doorstep. <br />✔Eco-Friendly Cleaning – Our detergents and processes are safe for
              you and the environment. <br />✔Fast & Reliable – Get your clothes
              cleaned and delivered on time, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
