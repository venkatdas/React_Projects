import React from "react";

const Person = ({name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <p>{name}</p>
      <p>{age}</p>
    </article>
  );
};

export default Person;
