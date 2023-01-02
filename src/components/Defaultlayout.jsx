import React from "react";

function Defaultlayout(props) {
  return (
    <div>
 <div className="navbar">
      <div className="left">3DSPACE</div>
      <div className="right">
        <ul>
          <li className="demo">Get a demo</li>
          <li className="signin"> signin / signup</li>
        </ul>
      </div>
    </div>
    <div className="content">
      {props.children}
    </div>
    {/* <div className="footer">

    </div> */}
    </div>

   
  );
}

export default Defaultlayout;
