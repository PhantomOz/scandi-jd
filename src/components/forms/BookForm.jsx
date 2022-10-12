import React from "react";

const BookForm = () => {
  return (
    <div>
      <div className="input">
        <label htmlFor="weight"> Weight (KG)</label>
        <input type="text" name="weight" id="weight" />
      </div>
      <p className="desc">“Please, provide weight”</p>
    </div>
  );
};

export default BookForm;
