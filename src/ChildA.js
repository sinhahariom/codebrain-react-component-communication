import React, { useEffect } from "react";

const ChildA = props => {
  const msg = "Heyy, Your Child Sent You a Gift Yayyyiii !!";

  useEffect(() => {
    props.twoWayBinding(msg); //sent back to parent
  });

  return (
    <div>
      <p>{props.oneWay}</p>
    </div>
  );
};

export default ChildA;
