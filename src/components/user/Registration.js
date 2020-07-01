import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../../redux/UserActions";

import "./Registration.css";

const initialState = {
  name: "",
  cell: "",
  email: "",
  dob: "",
  city: "",
  zipcode: "",
};

const Registration = (props) => {
  const [formState, setFormState] = useState(initialState);
  const [errorState, setErrorState] = useState({});
  const history = useHistory();

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const validate = (formState) => {
    if (!formState.name || !/^[A-Za-z ]+$/.test(formState.name)) {
      setErrorState({ nameError: "Enter a valid name." });
      return false;
    }
    if (!formState.cell || !/^\d{10}$/.test(formState.cell)) {
      setErrorState({ cellError: "Enter a valid cell no." });
      return false;
    }
    if (!formState.email || !/^\S+@\S+\.\S+$/.test(formState.email)) {
      setErrorState({ emailError: "Enter a valid E-mail." });
      return false;
    }

    if (props.userList.find((user) => user.email === formState.email)) {
      setErrorState({
        emailError: "Enter a different E-mail, this already exists.",
      });
      return false;
    }

    const dobIsValid = underAgeValidate(formState.dob);
    if (!dobIsValid) {
      setErrorState({
        dobError: "You are too young ,try again when you are old enough.",
      });
      return false;
    }

    if (!formState.city) {
      setErrorState({ cityError: "Please select a country" });
      return false;
    }
    if (!formState.zipcode || !/^\d{6}$/.test(formState.zipcode)) {
      setErrorState({ zipcodeError: "Enter a valid Zipcode." });
      return false;
    }
    setErrorState("");
    return true;
  };

  const underAgeValidate = (birthday) => {
    // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
    var optimizedBirthday = birthday.replace(/-/g, "/");

    //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
    var myBirthday = new Date(optimizedBirthday);

    // set current day on 01:00:00 hours GMT+0100 (CET)
    var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";

    // calculate age comparing current date and borthday
    var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);

    if (myAge < 18) {
      return false;
    } else {
      return true;
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const isValid = validate(formState);
    if (isValid) {
      console.log(formState);
      props.addUser({
        name: formState.name,
        cell: formState.cell,
        email: formState.email,
        dob: formState.dob,
        city: formState.city,
        zipcode: formState.zipcode,
      });
      history.push("/view");
    }
  };

  return (
    <div className="container ">
      <h2>User Registration</h2>
      <form className="col-lg-6" onSubmit={formSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required={true}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            value={formState.name.value}
            onChange={changeHandler}
          />
          <span>{errorState.nameError}</span>
        </div>

        <div className="form-group">
          <label htmlFor="cell">Cell:</label>
          <input
            required={true}
            type="text"
            className="form-control"
            id="cell"
            placeholder="Enter cell"
            name="cell"
            value={formState.cell.value}
            onChange={changeHandler}
          />
          <span>{errorState.cellError}</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            required={true}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={formState.email.value}
            onChange={changeHandler}
          />
          <span>{errorState.emailError}</span>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Dob:</label>
          <input
            required={true}
            type="date"
            className="form-control"
            id="dob"
            placeholder="Enter dob"
            name="dob"
            value={formState.dob.value}
            onChange={changeHandler}
          />
          <span>{errorState.dobError}</span>
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            className="form-control"
            name="city"
            id="city"
            onChange={changeHandler}
            required={true}
          >
            <option value="">select a City</option>
            <option value="India">Mumbai</option>
            <option value="America">Ahmedabad</option>
            <option value="Japan">Surat</option>
            <option value="Singapore">Delhi</option>
          </select>
          <span>{errorState.cityError}</span>
        </div>

        <div className="form-group">
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            required={true}
            type="text"
            className="form-control"
            id="zipcode"
            placeholder="Enter zipcode"
            name="zipcode"
            value={formState.zipcode.value}
            onChange={changeHandler}
          />
          <span>{errorState.zipcodeError}</span>
        </div>

        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (formState) => dispatch(addUser(formState)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
