import { useState, useEffect,useCallback  } from "react";
import Board from "./Board";
import { useDispatch, useSelector } from "react-redux";

export default function Main() {
  const [data, setData] = useState(require("./data.json"));
  const [hero, setHero] = useState(null);
  const { count } = useSelector((state) => state.counter);
  const removeHero = () => {
    console.log("remove hero");
    console.log("data",data);
    console.log("hero",hero)
    console.log("data.filter((obj) => obj.id !== hero.id)=", data.filter((obj) => {
      return(obj.id !== hero.id)
    }));
    setData(data.filter((obj) => obj.id !== hero.id));
  };
  useEffect(() => {
    console.log("main useeffect")
    const rand = Math.round(Math.random() * (data.length - 1));
    const choosen = data[rand];
    console.log("choosen on is " + choosen.hebrew);
    console.log("data", data);
    setHero(choosen);
    console.log("hero after sethero ",hero)
  }, [data]);

  return (
    <div>
      <div className="score">
        <span style={{ marginLeft: "10px" }}>{count}</span>
        <span>s</span>
      </div>

      {hero && (
        <div>
          <img src={hero.imageurl} height="100"></img>
          <Board hero={hero} removeHero={removeHero} />
        </div>
      )}
    </div>
  );
}
