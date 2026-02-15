'use client';
import React, { useState } from "react";
import Envelope from "./layouts/envelope";
import Letter from "./layouts/letter";
import Celebration from "./layouts/celebration";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [doneSpinning, setDoneSpinning] = useState(false);

  const [yesClicked, setYesClicked] = useState(false);
  const [yesDone, setYesDone] = useState(false);

  const handleBoxClick = () => {
    if (opened) return;

    setOpened(true);
    setTimeout(() => {
      setShowLetter(true);
      
      setTimeout(() => {
        setDoneSpinning(true);
      }, 350);
    }, 400);
  };

  return (
    <>
      {!showLetter && (
        <h1 className="text-center">Click to Open...</h1>
      )}

      <div className={
        `box ${opened ? "opened" : ""} 
        ${doneSpinning ? "done-spinning" : ""} 
        ${yesClicked ? "yes" : ""}
        ${yesDone ? "hide" : ""}`
        } onClick={handleBoxClick}>

        {showLetter ? (
          <Letter 
            yesClicked={yesClicked}
            setYesClicked={setYesClicked}
            setYesDone={setYesDone}
          />
        ) : (
          <Envelope />
        )}
      </div>

      <Celebration yesClicked={yesClicked} />
    </>
  );
}
