import style from "./style.module.scss";

export default function Tariff(props) {
  return (
    <div
      className={`${style.card} ${style[props.isSelected ? "selected" : ""]}`}
    >
      <header className={`${style.card__header} ${style[props.colorHeader]}`}>
        Безлимитный {props.rate}
      </header>
      <div className={`${style.card__info} ${style[props.colorInfo]}`}>
        <p className={style.card__currency}>руб</p>
        <p className={style.card__price}>{props.price}</p>
        <p className={style.card__period}>/мес</p>
      </div>
      <div className={style.card__speed}>До {props.speed} Мбит/сек</div>
      <footer className={style.card__footer}>
        Объeм включенного <br /> трафика не ограничен
      </footer>
    </div>
  );
}
