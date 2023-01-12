import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";

const TimerTwo = ({ flag2, chnageTimer,num2 }) => {
  console.log("timerTwo")
  return (
    <div>
      <h1 className="mt-3">
        <Badge bg="danger">{num2}</Badge>
      </h1>
      <Button
        variant="light"
        onClick={() => {
          if (flag2) {
            // setFlag2(false);
            // setFlag1(true);
            chnageTimer(true,false,false)
          }
        }}
        className="mx-2"
      >
        prev
      </Button>
      <Button
        variant="light"
        onClick={() => {
          if (flag2) {
            // setFlag2(false);
            // setFlag3(true);
            chnageTimer(false,false,true)
          }
        }}
        className="mx-2"
      >
        next
      </Button>
    </div>
  );
};

export default React.memo(TimerTwo);
