import React from "react";

const Book = ({ img, title, author }) => {
  //attribute,eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = () => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log();
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Book Alert
      </button>
      <button type="button" on click={() => complexExample(author)}>
        More Info
      </button>
    </article>
  );
};

export default Book;
