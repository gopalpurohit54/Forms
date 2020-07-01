import React, { useState } from "react";

const Pattern = () => {
  const [value, setValue] = useState(0);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    var i = 0;
    var j = 0;

    for (i = 0; i < value; i++) {
      var str = "";
      var num = 65;
      for (j = 0; j <= i; j++) {
        str = str + String.fromCharCode(num);
        num = num + 1;
      }
      console.log(str);
    }

    for (i = 0; i <= value; i++) {
      str = "";
      for (j = 0; j < value - i; j++) {
        str = str + " ";
      }
      var k = i;
      for (j = i; j > 0; j--) {
        str = str + k;
        k = k + 1;
      }
      for (j = 1; j < i; j++) {
        str = str + (k - j - 1);
      }
      console.log(str);
    }
  };

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <form className="col-lg-6" onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Value:</label>
          <input
            required={true}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            value={value}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>check console for values</h3>
    </React.Fragment>
  );
};

export default Pattern;
