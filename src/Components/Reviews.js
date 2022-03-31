import React, { useState } from "react";
import {Link} from 'react-router-dom'

const getDatafromLS = () => {
  //LS means local storage
  const data = localStorage.getItem("reviews");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const Reviews = () => {
  const [reviews, setReviews] = useState(getDatafromLS);
  return (
    <>
      <div className="view-container">
            <div className="heading">
              <h1>All Feedback</h1>
            </div>
            <hr/>
            <div className="content">
              <Link to="/" className="frm">
               <h5> Form</h5>
              </Link>
              <Link to="/reviews" className="tble">
                <h5>Table</h5>
              </Link>
            </div>
            <hr/>
        {reviews.length > 0 && (
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Form Name</th>
                    <th>Title</th>
                    <th>Phone field</th>
                    <th>Email field</th>
                    <th>Name</th>
                    <th>Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr>
                      <td>Aromatic Bar</td>
                      <td>{review.title}</td>
                      <td>{review.phone}</td>
                      <td>{review.email}</td>
                      <td>{review.name}</td>
                      <td>{review.exp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {reviews.length < 1 && <div style={{"text-align":"center"}}>No reviews</div>}
      </div>
    </>
  );
};

export default Reviews;
