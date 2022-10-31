import { useEffect } from "react";
import useSound from "use-sound";
import sample from "./assets/sounds/sample-3s.mp3";
import bad1 from "./assets/sounds/bad1.mp4";
import good1 from "./assets/sounds/good1.mp4";
import { useSelector } from "react-redux";

export default function Score(score) {
  const { action } = useSelector((state) => state.counter);

  const [playInc] = useSound(good1);
  const [playDec] = useSound(bad1);
  useEffect(() => {
    console.log("score useeffect");
    console.log("act", action);
    if (action === "inc") {
      playInc();
    } else if (action === "dec") {
      playDec();
    }
  }, [score]);
}
