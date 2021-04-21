import React from "react";
import ChildA from "./ChildA";
import { useState, useContext, useEffect } from "react";
import myContext from "./myContext";

const ParentA = () => {
  const oneWay = "One Way Binding Using Props -  Parent to Child ";
  const [twoWayBindingVar, setTwoWaybindingVar] = useState(
    "No Msg from CHild Yet :("
  );
  const twoWayBinding = val => {
    setTwoWaybindingVar(val);
  };
  const { globalMsg, UpdateglobalMsg } = useContext(myContext);
  useEffect(() => {
    UpdateglobalMsg("i am updated");
  });
  return (
    <div>
      <button />
      <ChildA oneWay={oneWay} twoWayBinding={twoWayBinding} />
      <p>{twoWayBindingVar}</p>
      <p>{globalMsg}</p>
    </div>
  );
};

export default ParentA;
