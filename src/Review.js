import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // state
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  // functions
  const checkIndex = (indexToCheck) => {
    if (indexToCheck < 0) {
      return people.length - 1;
    } else if (indexToCheck >= people.length) {
      return 0;
    } else {
      return indexToCheck;
    }
  };
  const prevIndex = () => {
    setIndex((indexPrev) => {
      return checkIndex(indexPrev - 1);
    });
  };
  const nextIndex = () => {
    setIndex((prevIndex) => {
      return checkIndex(prevIndex + 1);
    });
  };
  const randomIndex = () => {
    const randIndex = Math.floor(Math.random() * people.length);
    if (randIndex === index) {
      return randomIndex();
    }
    setIndex(randIndex);

    console.log(index);
  };
  // UI
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomIndex}>
        Surprise me !{" "}
      </button>
    </article>
  );
};

export default Review;
