import React from "react";

const DvdForm = () => {
  return (
    <div>
      <div className="input">
        <label htmlFor="size">Size (MB)</label>
        <input type="text" name="size" id="size" />
      </div>
      <p className="desc">“Please, provide size”</p>
    </div>
  );
};

export default DvdForm;
