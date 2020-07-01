import React from "react";

const A = [2, 3, 1, 4, 5];

const Array = () => {
  const min = (x, y) => {
    var c = 0;
    while (x && y) {
      x--;
      y--;
      c++;
    }
    return c;
  };
  const minimum = () => {
    const len = A.length;
    var mn = A[0];
    var i = 0;
    for (i = len - 1; i > 0; i--) {
      mn = min(mn, A[i]);
    }
    return mn;
  };

  return <h1>The minimum value from the array is : {minimum()}</h1>;
};

export default Array;
