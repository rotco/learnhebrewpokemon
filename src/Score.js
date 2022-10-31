import { useEffect } from "react";
import useSound from "use-sound";
import sample from "./assets/sounds/sample-3s.mp3";
import { useSelector } from "react-redux";

export default function Score(score) {
  const { action } = useSelector((state) => state.counter);

  const [playInc] = useSound(sample);
  const [playDec] = useSound(sample);
  useEffect(() => {
    console.log("score useeffect");
    console.log("act", action);
    if (action ==='inc'){
        playInc();
    }
    else if (action ==='dec'){
        playDec()
    }
  }, [score]);
}
