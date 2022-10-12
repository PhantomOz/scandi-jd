import React from "react";

const BookForm = ({ weight, change }) => {
  return (
    <div>
      <div className="input">
        <label htmlFor="weight"> Weight (KG)</label>
        <input
          type="number"
          name="weight"
          id="weight"
          value={weight}
          onChange={change}
          required
        />
      </div>
      <p className="desc">“Please, provide weight”</p>
    </div>
  );
};

export default BookForm;
