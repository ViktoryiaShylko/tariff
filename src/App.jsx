import "./App.css";
import Tariff from "./components/Tariff";
import blueTheme from "./styles/blue.module.scss";
import greenTheme from "./styles/green.module.scss";
import redTheme from "./styles/red.module.scss";
import grayTheme from "./styles/gray.module.scss";

const cards = [
  {
    rate: "300",
    speed: "10",
  },
  {
    rate: "450",
    speed: "50",
  },
  {
    rate: "550",
    speed: "100",
    isSelected: "selected",
  },
  {
    rate: "1000",
    speed: "200",
  },
];

const themes = [blueTheme, greenTheme, redTheme, grayTheme];

export default function App() {
  return (
    <div className="App">
      <div className="cards">
        {cards.map((card, i) => (
          <Tariff
            rate={card.rate}
            price={card.rate}
            speed={card.speed}
            theme={themes[i]}
            isSelected={card.isSelected}
          ></Tariff>
        ))}
      </div>
    </div>
  );
}
