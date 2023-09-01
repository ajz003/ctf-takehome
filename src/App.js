import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [flag, setFlag] = useState("");
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchFlag() {
      setLoading(true);
      const response = await fetch(
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/62616c"
      );
      const flagText = await response.text();

      setFlag(flagText);
      setLoading(false);
      setLoaded(true);
    }

    fetchFlag();
  }, []);

  useEffect(() => {
    if (loaded) {
      const intervalId = setInterval(() => {
        if (currentIndex < flag.length) {
          setText(text + flag.charAt(currentIndex));
          setCurrentIndex(currentIndex + 1);
        } else {
          clearInterval(intervalId); // Stop the typewriter effect after displaying the full string
        }
      }, 500); // Delay between each character: 500 milliseconds

      return () => {
        clearInterval(intervalId); // Clean up the interval on unmount
      };
    }
  }, [loaded, flag, currentIndex, text]);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ul>
            {text.split("").map((char, index) => (
              <li key={char + index}>{char}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
