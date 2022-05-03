import React from "react";
import commitments from "./commitments.module.css";

const Commitment = () => {
  return (
    <div className={commitments.container}>
      <div className={commitments.griditem} />
      <div className={commitments.griditem} />
      <div className={commitments.griditem} />
      <div className={commitments.griditem} />
      <div className={commitments.griditem} />
      <div className={commitments.griditem} />
      <div className={commitments.griditem} />
    </div>
  );
};

export default Commitment;
