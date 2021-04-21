import React, { useState } from "react";
import "./style.css";
import ParentA from "./ParentA";
import ParentB from "./ParentB";
import myContext from "./myContext";

export default function App() {
  const [globalMsg, setglobalMsg] = useState(
    "BroadCast - Childrens, Do you Copy ?"
  );
  const UpdateglobalMsg = msg => {
    console.log(msg);
    setglobalMsg(msg);
  };
  return (
    <div>
      <myContext.Provider value={{ globalMsg, UpdateglobalMsg }}>
        <ParentA />
        {/* <ParentB /> */}
      </myContext.Provider>
    </div>
  );
}
