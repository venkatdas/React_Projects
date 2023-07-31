import React from 'react'
import Person from './Person'
const List = ({ randomName }) => {
  return (
    <section>
      {randomName.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List