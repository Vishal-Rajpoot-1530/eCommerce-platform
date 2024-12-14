import css from './WOMEN.module.css'

export default function WOMEN() {
  return (
    <div className={css.women}>
      <div>
        <ul>
          <h4>Topwear</h4>
          <li>T-Shirt</li>
          <li>Casual shirts</li>
          <li>Formal shirts</li>
          <li>Sweat Shirts</li>
          <li>Sweaters</li>
          <li>Jackets</li>
          <li>Blazers & Coats</li>
          <li>Suits</li>
          <li>Rain Jackets</li>
          <hr />
          <h4>Indian & Festive Wear</h4>
          <li>Kurtas & Kurta sets</li>
          <li>Sherwanis</li>
          <li>Nehru Jackets</li>
          <li>Dhotis</li>
        </ul>
      </div>
      <div>
        <ul>
          <h4>Bottom Wear</h4>
          <li>Jeans</li>
          <li>Casual Trousers</li>
          <li>Formal Trousers</li>
          <li>Shorts</li>
          <li>Track Pants & Joggers</li>
          <hr />
          <h4>Innerwear & SleepWear</h4>
          <li>Briefs & Trunks</li>
          <li>Boxers</li>
          <li>Vests</li>
          <li>Sleepwear & Loungewear</li>
          <li>Thermals</li>
        </ul>
      </div>
    </div>
  );
}
