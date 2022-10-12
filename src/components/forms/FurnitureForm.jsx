import React from "react";

const FurnitureForm = () => {
  return (
    <div>
      <div className="input">
        <label htmlFor="height">Height (CM)</label>
        <input type="text" name="height" id="height" />
      </div>
      <div className="input">
        <label htmlFor="width">Width (CM)</label>
        <input type="text" name="width" id="width" />
      </div>
      <div className="input">
        <label htmlFor="length">Length (CM)</label>
        <input type="text" name="length" id="length" />
      </div>
      <p className="desc">“Please, provide dimensions”</p>
    </div>
  );
};

export default FurnitureForm;
