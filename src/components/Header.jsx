import { Link } from "react-router";
import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo_container}>
        <Link to="/">
          <img src="mylogo3.png" alt="Logo" />
        </Link>
      </div>
      <nav className={css.nav_bar}>
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/home and living">HOME&LIVING</Link>
        <Link to="/beauty">BEAUTY</Link>
        <Link to="/studio">
          STUDIO<sup> new</sup>
        </Link>
      </nav>
      <div className={css.search_bar}>
        <span className={`${"material-symbols-outlined"} ${ css.search_icon}`}>
        🔍
        </span>
        <input
          className={css.search_input}
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className={css.action_bar}>
        <div className={css.action_container}>
          <span className={`${"material-symbols-outlined"} ${"action_icon"}`}>
          👨🏻
          </span>
          <span className={css.action_name}>Profile</span>
        </div>

        <div className={css.action_container}>
          <span className={`${"material-symbols-outlined"} ${"action_icon"}`}>
          ❤︎
          </span>
          <span className={css.action_name}>Wishlist</span>
        </div>

        <div className={css.action_container}>
          <span className={`${"material-symbols-outlined"} ${"action_icon"}`}>
          🛍️
          </span>
          <span className={css.action_name}>Bag</span>
        </div>
        <sup className={css.sup_script}>0</sup>
      </div>
    </div>
  );
}
