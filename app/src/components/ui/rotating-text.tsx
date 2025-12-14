
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RotatingTextProps {
  words: string[];
  period?: number;
  className?: string;
}

export const RotatingText: React.FC<RotatingTextProps> = ({ words, period = 2000, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150 - Math.random() * 75);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [displayedText]);

  const tick = () => {
    const i = loopNum % words.length;
    const fullText = words[i];
    let newText = '';

    if (isDeleting) {
      newText = fullText.substring(0, displayedText.length - 1);
    } else {
      newText = fullText.substring(0, displayedText.length + 1);
    }

    setDisplayedText(newText);

    if (isDeleting) {
      setDelta(50); // Faster deleting
    }

    if (!isDeleting && newText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && newText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Faster typing
    }
  };

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      <span className="border-r-2 border-accent animate-pulse"></span>
    </span>
  );
};
