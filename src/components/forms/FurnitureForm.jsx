import React from "react";

const FurnitureForm = ({ height, length, width, change }) => {
  return (
    <div>
      <div className="input">
        <label htmlFor="height">Height (CM)</label>
        <input
          type="number"
          name="height"
          id="height"
          value={height}
          onChange={change}
          required
        />
      </div>
      <div className="input">
        <label htmlFor="width">Width (CM)</label>
        <input
          type="number"
          name="width"
          id="width"
          value={width}
          onChange={change}
          required
        />
      </div>
      <div className="input">
        <label htmlFor="length">Length (CM)</label>
        <input
          type="number"
          name="length"
          id="length"
          value={length}
          onChange={change}
          required
        />
      </div>
      <p className="desc">“Please, provide dimensions”</p>
    </div>
  );
};

export default FurnitureForm;
