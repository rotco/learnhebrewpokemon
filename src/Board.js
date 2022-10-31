import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

export default function Board({ hero, removeHero }) {
  const [progress, setProgress] = useState();
  const [progressIndex, setProgressIndex] = useState(0);
  const [shuffledLetters, setShuffledLetters] = useState(null);
  const [completeBoard, setCompleteBoard] = useState(false);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hero.hebrew.length=" + hero.hebrew.length);
    console.log("hero.hebrew=" + hero.hebrew);
    setProgress([...Array(hero.hebrew.length)]);
    setProgressIndex(0);
    console.log("shuffledLetters before assignment to temp", shuffledLetters);
    let tempShuffledLetters = [...Array(hero.hebrew.length)];
    hero.hebrew.split("").forEach((letter) => {
      while (true) {
        const rand = Math.round(
          Math.random() * (hero.hebrew.split("").length - 1)
        );
        if (tempShuffledLetters[rand] === undefined) {
          tempShuffledLetters[rand] = { value: letter, completed: false };
          break;
        }
      }
      setCompleteBoard(false);
      setShuffledLetters(tempShuffledLetters);
    });
  }, [hero.hebrew]);
  const handleClickLetter = (ch) => {
    console.log("Clicked", ch);
    console.log("progressIndex", progressIndex);
    if (ch.value === hero.hebrew[progressIndex]) {
      let tempArray = progress;
      dispatch(increment());
      tempArray[progressIndex] = ch.value;
      ch.completed = true;
      setProgress(tempArray);
      if (hero.hebrew.length === progressIndex + 1) {
        setCompleteBoard(true);
      }
      setProgressIndex(progressIndex + 1);
    } else {
      dispatch(decrement());
    }
  };
  return (
    <div>
      {progress && (
        <div>
          {console.log(progress)}
          <div className="board">
            {shuffledLetters && (
              <div>
                {shuffledLetters.map((ch, i) => {
                  if (!ch.completed)
                    return (
                      <div
                        className="letter"
                        key={i}
                        onClick={() => handleClickLetter(ch)}
                      >
                        {ch.value}
                      </div>
                    );
                })}
              </div>
            )}
          </div>
          <div className="progress">
            {progress.map((ch, i) => {
              return (
                <div className="letter" key={i}>
                  {ch}
                </div>
              );
            })}
          </div>
          {completeBoard && (
            <div className="next">
              <img
                onClick={() => {
                  console.log("current hero before remove", hero);
                  removeHero();
                  //   init();
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Gift_Flat_Icon_Vector_.svg"
                height="200px"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
