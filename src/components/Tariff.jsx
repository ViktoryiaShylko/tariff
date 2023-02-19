import style from "../styles/card.scss";
import icon from "../images/icon.png";

export default function Tariff(props) {
  //   const classCard = props.isSelected ? "selected" : "";
  return (
    <div className={style.card}>
      <header className={style.card__header}>Безлимитный{props.rate}</header>
      <div className={style.card__info}>
        <p className={style.card__price}>руб</p>
        <p className={style.card__rate}>{props.rate}</p>
        <p className={style.card__period}>/мес</p>
      </div>
      <div className={style.card__speed}>До {props.speed} Мбит/сек</div>
      <footer className={style.card__footer}>
        Объём включенного трафика не ограничен
      </footer>
      <img src={icon} className={style.card__icon} />
    </div>
  );
}
