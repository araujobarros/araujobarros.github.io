import React, { useEffect, useState } from "react";
import "./randCandles.css";
import { candles } from "../../portfolio";

export default function RandCandles() {
  const [listCandles, setlistCandles] = useState();
  const [listPositions, setlistPositions] = useState();
  const [clock, setClock] = useState(true);

  useEffect(() => {
    setlistCandles(randomizeCandles());
  }, [clock]);

  useEffect(() => {
    const timer = clock
      ? setInterval(() => {
          setClock(!clock);
        }, 5000)
      : setInterval(() => {
          setClock(!clock);
        }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    setlistPositions(randomizePositions);
  }, [listCandles]);

  const randomizeCandles = () => {
    const listCandles = [];
    for (let index = 0; index < 20; index++) {
      listCandles.push(candles[Math.round(Math.random() * 11.98 - 0.49)]);
    }
    return listCandles;
  };

  const randomizePositions = () => {
    const listPositions = [];
    listPositions.push(Math.round(Math.random() * 85.98 - 0.49));
    for (let index = 1; index < 20; index++) {
      if (listCandles && listCandles[index - 1].includes("R")) {
        if (listPositions[index - 1] > 0) {
          listPositions.push(listPositions[index - 1] - 5);
        } else {
          listPositions.push(listPositions[index - 1] + 5);
        }
      } else if (listPositions[index - 1] < 85) {
        listPositions.push(listPositions[index - 1] + 5);
      } else {
        listPositions.push(listPositions[index - 1] - 5);
      }
    }
    return listPositions;
  };

  const renderCandles = () => {
    if (clock && listCandles) {
      return (
        <div className="candles">
          {listCandles.map((element, index) => (
            <img
              src={require(`../../assests/images/${element}`)}
              alt="candle"
              style={{
                position: "absolute",
                "justify-self": "normal",
                "z-index": "1",
                bottom: `${listPositions[index]}%`,
                left: `${index * 5}%`,
                animation: `visibleOne ${3}s linear ${0.1 * index}s`,
                "animation-direction": "normal",
                "animation-iteration-count": "1",
                "animation-fill-mode": "both",
              }}
            />
          ))}
        </div>
      );
    }
    return <div />;
  };
  return renderCandles();
}
