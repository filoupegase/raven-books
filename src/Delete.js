import "./App.css";
import React from "react";
import axios from "axios";

export default function Delete(props) {
  const deleteReview = () => {
    axios
      .delete(`https://ravenbooks.herokuapp.com/reviews/${props.id}`)
      .then((res) => {
        props.setReviews(
          props.reviews.filter((item) => {
            return item.id !== props.id;
          })
        );
      });
  };

  return (
    <button className="del-btn" onClick={deleteReview}>
      Delete Review
    </button>
  );
}
