import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";

const TimerOne = ({ flag1, chnageTimer,num1 }) => {
  console.log("timerOne")
  return (
    <div>
      <h1 className="mt-3">
        <Badge bg="danger">{num1}</Badge>
      </h1>
      <Button
        variant="light"
        onClick={() => {
          if (flag1) {
            // setFlag1(false);
            // setFlag2(true);
            chnageTimer(false,true,false)
          }
        }}
      >
        next
      </Button>
    </div>
  );
};

export default React.memo(TimerOne);
