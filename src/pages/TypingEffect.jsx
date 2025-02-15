import { useState, useEffect } from "react";


const TypingEffect = () => {
  const text = "Frontend Developer";
  const typingSpeed = 100;
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    if (index === text.length) {
      const blinkInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(blinkInterval);
    }
  }, [index]);

  return (
    <h5 className="text-2xl">
      And I&apos;m a{" "}
      <span className="text-Sky-blue font-bold">{displayText}</span>
      {showCursor && <span className=""> |</span>}
    </h5>
  );
};

export default TypingEffect;
