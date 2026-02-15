import { useState } from "react";

interface LetterProps {
  yesClicked: boolean;
  setYesClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setYesDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Letter({ yesClicked, setYesClicked, setYesDone }: LetterProps) {
    const [noMessage, setNoMessage] = useState("No");
    const [noClickCount, setNoClickCount] = useState(0);
    const [noEnabled, setNoEnabled] = useState(true);

    const MAX_NO_CLICKS = 20;
    const MESSAGES = [
        "lol this button doesn't do anything...",
        "are you sure?",
        "you can't get rid of me that easily",
        "why did you click this...?",
        "you hate me",
    ];

    const handleYesClick = () => {
        setYesClicked(true);

        setTimeout(() => {
            setYesDone(true);
        }, 1800);
    };
    
    const handleNoClick = () => {
        if (yesClicked) return;

        if (noClickCount < MAX_NO_CLICKS) { 
            var newMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
            setNoMessage(newMessage);
            setNoClickCount(noClickCount + 1);
            return;
        }
        
        setNoEnabled(false);
        setNoMessage("enough.");
    };

    return (
        <div className={`content`}>
            <h1 className="text-center">Letter To My Beloved</h1>
            <br />

            <hr />

            <p className="fst-italic fw-bold signature">
                My Dearest, Domo Jones
            </p>

            <p className="text-center">
                You may be a poopy butt... but you're MY poopy butt.
            </p>

            <p className="text-end fst-italic fw-bold signature">
                Yours Truly, Sheizah Jimenez
            </p>

            <br />

            <h3 className="text-center">
                Will You Be My Valentine?
            </h3>

            <br />

            <div className="option-box">
                <button type="button" onClick={handleYesClick}>
                    Yes
                </button>
                <button type="button" onClick={handleNoClick} className={noEnabled ? "" : "disabled"} disabled={!noEnabled}>
                    {noMessage}
                </button>
            </div>
        </div>
    );
}
