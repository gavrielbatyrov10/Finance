import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, period }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      let delta = 200 - Math.random() * 100;

      if (isDeleting) delta /= 2;

      if (!isDeleting && text === fullText) {
        delta = period;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta = 500;
      }

      setTypingSpeed(delta);
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts, period]);

  return (
    <span className="typewrite">
      <span className="wrap">{text}</span>
    </span>
  );
};

const App = () => {
  const texts = [
    "Learning about your personal finances isn't that hard.",
    "I am Creativdddddddddddddddddddddde.",
    "I Love Decccccccccccccccccccccccsign.",
    "I Love to Decccccccccccccccccccvelop."
  ];
  const period = 2000;

  return (
    <div style={{ textAlign: "center", paddingTop: "10em", backgroundColor: "antiquewhite", color: "#000" }}>
      <h1>
        <a href="/" className="typewrite">
          <Typewriter texts={texts} period={period} />
        </a>
      </h1>
      <style>
        {`
          .typewrite > .wrap {
            border-right: 0.08em solid #fff;
          }
          .typewrite {
            color: #d44b4b;
          }
        `}
      </style>
    </div>
  );
};

export default Typewriter;
