import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const size = ref.current;
    setWidth(size.offsetWidth);
    setHeight(size.offsetHeigh);
  }, []);

  const nobuttonHandler = (event) => {
    // there is a 30px difference between the actual size and the indicated size
    const random_left = Math.floor(Math.random() * (width - 30 + 1));  
    const random_top = Math.floor(Math.random() * (height - 30 + 1));

    event.currentTarget.style.position = "absolute";    
    event.currentTarget.style.left = `${random_left}px`;
    event.currentTarget.style.top = `${random_top}px`;
  };

  const yesbuttonHandler = () => {
    setYesClicked(true);
  };

  return (
    <div>
      <div className="container" ref={ref}>
        {!yesClicked ? (
          <div>
            <h2>Are You Dumb?</h2>
            <div className="btns">
              <button className="yes_btn" onClick={yesbuttonHandler}>
                Yes, I am.
              </button>
              <button className="no_btn" onClick={nobuttonHandler}>
                No, I'm not.
              </button>
            </div>
          </div>
        ) : (
          <h2>I knew it!!!</h2>
        )}
      </div>
    </div>
  );
}

export default App;
