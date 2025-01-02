import css from "./Card.module.css";
export default function Card({ cardDetails, brands }) {
  return (
    <>
      {cardDetails.map((item) =>
        item.imgName === brands ? (
          <div className={css.card}>
            <img src={item.imgUrl} alt="image loading" />
            <h5> min 50% off</h5>
          </div>
        ) : (
          <div></div>
        )
      )}
    </>
  );
}
