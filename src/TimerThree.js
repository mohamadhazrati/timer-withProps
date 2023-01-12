import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";

const TimerThree = ({ flag3, chnageTimer, num3 }) => {
  console.log("timerThree");
  return (
    <div>
      <h1 className="mt-3">
        <Badge bg="danger">{num3}</Badge>
      </h1>
      <Button
        variant="light"
        onClick={() => {
          if (flag3) {
            // setFlag3(false);
            // setFlag2(true);
            chnageTimer(false,true,false)
          }
        }}
      >
        prev
      </Button>
    </div>
  );
};

export default React.memo(TimerThree);
