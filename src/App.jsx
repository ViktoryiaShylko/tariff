import style from "./App.css";
import Tariff from "./components/Tariff";
import blueTheme from "./styles/blue.module.scss";
import greenTheme from "./styles/green.module.scss";
import redTheme from "./styles/red.module.scss";
import grayTheme from "./styles/gray.module.scss";

const cards = [
  {
    rate: "300",
    price: "300",
    speed: "10",
  },
  {
    rate: "450",
    price: "450",
    speed: "50",
  },
  {
    rate: "550",
    price: "550",
    speed: "100",
  },
  {
    rate: "1000",
    price: "1000",
    speed: "200",
  },
];

export default function App() {
  const themes = [blueTheme, greenTheme, redTheme, grayTheme];
  return (
    <div className={style.App}>
      <div className={style.cards}>
        {cards.map((card, i) => (
          <Tariff
            rate={card.rate}
            price={card.price}
            speed={card.speed}
            theme={themes[i]}
          ></Tariff>
        ))}
      </div>
    </div>
  );
}
