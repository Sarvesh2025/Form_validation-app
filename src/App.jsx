import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confm, setConfm] = useState(' ');
  const [age, setAge] = useState(' ');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const validateForm =() => {
    const error = {};
    if (!name) {
      error.name = 'Name is required!!!';
    }
    if (!email) {
      error.email = 'Email is required!!!';
    }
     let f = false;
     for (let x in password) {
       if (x >= "a" && x <= "z") {
         f = true;
       }
     }
    if (!password) {
      error.password = 'Password is required';
    }
    else if (password.length < 6 ||!f) {
      error.password = 'Password must be 6 characters long,must contain Small letter alphabet';
    }

    if (!confm) error.confm = 'Confirm Password is needed!!!!!';
    else if (confm != password) error.confm = 'Password is not matching !!!!';

    if (!age) error.age = 'Age is required!!!';
    else if (age < 18 || isNaN(age)) error.age = 'Jaao dudh piyo abhi!!!';
    if (!gender) error.gender = 'Gender is needed!!';
    console.log(error);
    return error;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setError(validationErrors);
    }
   else console.log("Form Submitted");
  }
  return (
    <>
      <div id="container">
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit}>
          <div className="faults">
            <label>Name:</label><br/>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div>{error.name}</div>
          </div>
          <div className="faults">
            <label>Email:</label><br/>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>{error.email}</div>
          </div>
          <div className="faults">
            <label>Password:</label><br/>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>{error.password}</div>
          </div>
          <div className="faults">
            <label>Confirm Password:</label><br/>
            <input
              type="text"
              value={confm}
              onChange={(e) => setConfm(e.target.value)}
            />
            <div>{error.confm}</div>
          </div>
          <div className="faults">
            <label>Age:</label><br/>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <div>{error.age}</div>
          </div>
          <div className="faults">
            <label>Gender:</label>
            <select value={gender} onChange={() => setGender(e.target.value)}>
              <option value=" ">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <div>{error.gender}</div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
