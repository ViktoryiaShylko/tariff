import style from "./App.css";
import Tariff from "./components/Tariff";

const cards = [
  {
    rate: "300",
    price: "300",
    speed: "10",
    colorHeader: "blue-header",
    colorInfo: "blue-info",
  },
  {
    rate: "450",
    price: "450",
    speed: "50",
    colorHeader: "green-header",
    colorInfo: "green-info",
  },
  {
    rate: "550",
    price: "550",
    speed: "100",
    colorHeader: "red-header",
    colorInfo: "red-info",
    isSelected: "selected",
  },
  {
    rate: "1000",
    price: "1000",
    speed: "200",
    colorHeader: "gray-header",
    colorInfo: "gray-info",
  },
];

export default function App() {
  return (
    <div className={style.App}>
      <div className={style.cards}>
        {cards.map((card) => (
          <Tariff
            rate={card.rate}
            price={card.price}
            speed={card.speed}
            colorHeader={card.colorHeader}
            colorInfo={card.colorInfo}
            isSelected={card.isSelected}
          ></Tariff>
        ))}
      </div>
    </div>
  );
}
