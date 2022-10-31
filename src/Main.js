import { useState, useEffect } from "react";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";

export default function Main() {
  const [data, setData] = useState(require("./data.json"));
  const [hero, setHero] = useState(null);
  const { count } = useSelector((state) => state.counter);
  const removeHero = () => {
    console.log("remove hero");
    setData(data.filter((obj) => obj.id !== hero.id));
    console.log("data=", data);
  };
  useEffect(() => {
    const rand = Math.round(Math.random() * (data.length - 1));
    const choosen = data[rand];
    console.log("choosen on is " + choosen);
    console.log("data " + data);
    setHero(choosen);
  }, [data]);

  return (
    <div>
      <div className="score">
        <span style={{ marginLeft: "10px" }}>{count}</span>
        <span>נקודות</span>
      </div>

      {hero && (
        <div>
          <img src={hero.imageurl} height="500"></img>
          <Board hero={hero} removeHero={removeHero} />
        </div>
      )}
    </div>
  );
}
