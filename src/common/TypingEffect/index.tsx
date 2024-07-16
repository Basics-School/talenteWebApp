"use client";

import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100, deleteSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return text.substring(0, prev.length - 1);
        } else {
          return text.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayedText === text) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex(0);
      } else if (!isDeleting) {
        setIndex((prev) => prev + 1);
      } else if (isDeleting) {
        setIndex((prev) => prev - 1);
      }
    };

    const intervalId = setInterval(handleTyping, isDeleting ? deleteSpeed : speed);

    return () => clearInterval(intervalId);
  }, [text, speed, deleteSpeed, displayedText, isDeleting, index]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
