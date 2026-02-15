import { useEffect } from "react";

interface CelebrationProps {
  yesClicked: boolean;
}

export default function Celebration({ yesClicked }: CelebrationProps) {
    useEffect(() => {
        if (yesClicked) {
            // Dynamically load confetti.js if not already loaded
            if (!window.startConfetti) {
                const script = document.createElement('script');
                script.src = '/scripts/confetti.js';
                script.async = true;
                script.onload = () => {
                    if (window.startConfetti) window.startConfetti();
                };
                document.body.appendChild(script);
            } else {
                window.startConfetti();
            }
        } else {
            if (window.stopConfetti) window.stopConfetti();
        }
        // Optionally stop confetti when unmounting or yesClicked becomes false
        return () => {
            if (window.stopConfetti) window.stopConfetti();
        };
    }, [yesClicked]);

    return (
        <div className={`celebration ${yesClicked ? "" : "hide"}`}>
            <p>omg yippe!!!!!!!</p>
        </div>
    );
}