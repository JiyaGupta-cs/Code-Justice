import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      
      <div>
        <h3>Upload Your Link</h3>
        {/* <CustomerReview /> */}
      </div>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;
