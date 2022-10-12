import React from "react";

const DvdForm = ({ size, change }) => {
  return (
    <div>
      <div className="input">
        <label htmlFor="size">Size (MB)</label>
        <input
          type="number"
          name="size"
          id="size"
          value={size}
          onChange={change}
          required
        />
      </div>
      <p className="desc">“Please, provide size”</p>
    </div>
  );
};

export default DvdForm;
