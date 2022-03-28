import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./form.css";

//getting values from local storage
const getDatafromLS = () => {
  //LS means local storage
  const data = localStorage.getItem("reviews");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  //array to store books after submitting
  console.log("getDatafromLS obje", getDatafromLS);
  const [reviews, setReviews] = useState(getDatafromLS);

  //input fields
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("");

  //form submit event
  const handleAddReviewsSubmit = (e) => {
    e.preventDefault();

    //creating object
    let review = {
      title,
      name,
      phone,
      email,
      exp,
    };
    setReviews([...reviews, review]);
    setTitle("");
    setName("");
    setEmail("");
    setPhone("");
    setExp("");
  };

  //saving data in local storage using useEffect
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <div className="wrapper">
      <h1 style={{color:"#00CED1"}}>Aromatic Bar</h1>
      <p style={{color:"#808080"}}>
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you.
      </p>

      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddReviewsSubmit}
          >
           <hr></hr>
            <div className="content">
              <Link to="/" className="frm">
               <h5> Form</h5>
              </Link>
              <Link to="/reviews" className="tble">
                <h5>Table</h5>
              </Link>
            </div>
           <hr></hr>
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>
            <br></br>
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <br></br>
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <br></br>
            <label>Phone:</label>
            <input
              type="tel"
              className="form-control"
              pattern="^\d{10}$"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            ></input>
            <br></br>
            <label>Tell about your experience</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setExp(e.target.value)}
              value={exp}
            ></input>
            <br></br>

            <button type="submit" className="btn btn-dark btn-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
