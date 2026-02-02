import { useState } from "react";

export default function Letter() {
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
        alert("Yes Clicked!");
    };
    
    const handleNoClick = () => {
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
        <div className="content">
            <h1 className="text-center">Some Title Here</h1>
            <hr />

            <p className="fst-italic fw-bold signature">
                My Dearest, Some Name
            </p>

            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>
            <p className="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut corporis necessitatibus perferendis suscipit velit cupiditate vitae laboriosam et animi voluptatibus beatae laborum magni voluptatem, sunt commodi vel nihil repudiandae quasi.
            </p>

            <p className="text-end fst-italic fw-bold signature">
                Yours Truly, Some Other Name
            </p>

            <br />

            <h4 className="text-center">
                Some Question Here?
            </h4>

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
