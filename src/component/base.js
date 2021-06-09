import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inCrement, diCrement } from "../action/action";
const Base = () => {
  const numberVelue = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="maintable">
      <h1>increment / decrement counter</h1>
      <p>using react and redux</p>
      <div className="incress_btn">
        <p onClick={() => dispatch(inCrement())}>+</p>
      </div>
      <div className="input">
        <input className="fild" type="text" name="" value={numberVelue} />
      </div>
      <div className="dicress_btn">
        <p onClick={() => dispatch(diCrement())}>-</p>
      </div>
    </div>
  );
};

export default Base;
