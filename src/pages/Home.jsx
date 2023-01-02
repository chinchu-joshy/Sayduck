import React, { Fragment } from "react";
import Defaultlayout from "../components/Defaultlayout";

function Home() {
  return (
    <Fragment>
      <Defaultlayout>
        <div className="contents">
          <div className="rightcontent">
            <h1 className="ar-hheading">
              3D and Augmented Reality for eCommerce
            </h1>
            <p className="ar-content">
              Grow your sales through interactive 3D and AR shopping
              experiences.
            </p>
            <button className="bookdemo">Book a demo</button>
          </div>
          <div className="leftcontent">
            <img className="imgchair" src="images/chair.jpeg" alt="" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="allinone">
            All-in-one solution for product visualisation online.
          </h1>
          <p>
            The one platform to store, customise, embed and display all your 3D
            models on the web. Easy to use, fast to grow your conversions.
          </p>
        </div>
        <div className="contents">
          <div className="rightcontent">
            <h1 className="ar-hheading">3D Configurator</h1>
            <p className="ar-content">
              Visualise all possible variations of your products with a simple
              click and place it instantly in augmented reality (AR). Allow your
              customer to be in control of making your product their own. Grow
              your sales through interactive 3D and AR shopping experiences.
            </p>
            <button className="bookdemo">Check the details</button>
          </div>
          <div className="leftcontent">
            <img className="imgchair" src="images/furniture.jpg" alt="" />
          </div>
        </div>
        <div className="contents">
          <div className="leftcontent">
            <img className="imgchair" src="images/ar.webp" alt="" />
          </div>
          <div className="rightcontent">
            <h1 className="ar-hheading">Augmented Reality</h1>
            <p className="ar-content">
              Experience online products in your own space through webAR. Give
              your shoppers the possibility to try out every possible product
              customisation you offer in their own space through augmented
              reality.
            </p>
            <button className="bookdemo">Check the details</button>
          </div>
        </div>
        <div className="contents">
          
          <div className="rightcontent">
            <h1 className="ar-hheading">3D Models</h1>
            <p className="ar-content">
              Experience online products in your own space through webAR. Give
              your shoppers the possibility to try out every possible product
              customisation you offer in their own space through augmented
              reality.
            </p>
            <button className="bookdemo">Check the details</button>
          </div>
          <div className="leftcontent">
            <img className="imgchair" src="images/ar.webp" alt="" />
          </div>
        </div>
      </Defaultlayout>
    </Fragment>
  );
}

export default Home;
