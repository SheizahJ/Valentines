'use client';
import React, { useState } from "react";
import Envelope from "./layouts/envelope";
import Letter from "./layouts/letter";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleBoxClick = () => {
    if (!opened) {
      setOpened(true);
      setTimeout(() => {
        setShowLetter(true);
      }, 400);
    }
  };

  return (
    <>
      {!showLetter && (
        <h1>Click to Open...</h1>
      )}

      <div className={`box${opened ? " opened" : ""}`} onClick={handleBoxClick} style={{ cursor: "pointer" }}>
        {showLetter ? (
          <Letter />
        ) : (
          <Envelope />
        )}
      </div>
    </>
  );
}
