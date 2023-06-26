import React, { useState, useEffect } from 'react';

const Btn = () => {
  const [mouseIsDown, setMouseIsDown] = useState(false);

  const handleMouseDown = () => {
    setMouseIsDown(true);
  };

  const handleMouseUp = () => {
    setMouseIsDown(false);
  };

  const clicked = () => {
    console.log('Mouse is pressed');
  };

  useEffect(() => {
    if (mouseIsDown) {
      const intervalId = setInterval(clicked, 100);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [mouseIsDown]);

  return (
    <div>
      <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        Mouse
      </button>
    </div>
  );
};

export default Btn;
