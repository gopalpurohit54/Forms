import React, { useState } from "react";
import { connect } from "react-redux";

const View = (props) => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState(null);

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  //After fetting data from search form
  const formSubmitHandler = (event) => {
    event.preventDefault();
    //setting data into searchList
    setSearchList(
      props.userList.filter((user) => {
        if (user.name === search || user.cell === search) {
          return true;
        }
      })
    );
  };

  //clearing once the search is completed
  const clearHandler = () => {
    setSearch("");
    setSearchList(null);
  };

  //An react element
  const Search = (
    <form className="col-lg-6" onSubmit={formSubmitHandler}>
      <div className="form-group">
        <input
          required={true}
          type="text"
          className="form-control"
          id="search"
          placeholder="Name/Cell"
          name="search"
          value={search}
          onChange={changeHandler}
        />
      </div>
      <button type="submit" className="btn btn-default">
        Search
      </button>
      <button type="button" className="btn btn-default" onClick={clearHandler}>
        Clear
      </button>
    </form>
  );

  //print if you have searched something or there is data in searchList
  if (searchList) {
    return (
      <div className="container">
        {Search}
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Cell</th>
              <th>Email</th>
              <th>Dob</th>
              <th>City</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
            {searchList.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.cell}</td>
                <td>{user.email}</td>
                <td>{user.dob}</td>
                <td>{user.city}</td>
                <td>{user.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  //prints all the users added
  return (
    <div className="container">
      {Search}
      <h2>Users List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cell</th>
            <th>Email</th>
            <th>Dob</th>
            <th>City</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {props.userList.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.cell}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>{user.city}</td>
              <td>{user.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

export default connect(mapStateToProps)(View);
