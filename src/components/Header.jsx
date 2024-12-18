import { Link } from "react-router";
import css from "./Header.module.css";
import PopUp from "./PopUp";
import { useState } from "react";
export default function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => setShowPopup(true);
  const handleMouseLeave = () => setShowPopup(false);
  return (
    <div
      className={css.header}
      style={{
        backgroundColor: showPopup ? "rgba(0, 0, 0, 0.5)" :  "white",

        transition: "background-color 0.2s ease",
      }}
    >
      <ul>
        <Link to="/">
          <img src="react.svg" alt="Logo" />
        </Link>
        <li>
          <Link
            to="/men"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            MEN
          </Link>
        </li>
        <li>
          <Link
            to="/women"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            WOMEN
          </Link>
        </li>
        <li>
          <Link
            to="/kids"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            KIDS
          </Link>
        </li>
        <li>
          <Link
            to="/home and living"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            HOME&LIVING
          </Link>
        </li>
        <li>
          <Link
            to="/beauty"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            BEAUTY
          </Link>
        </li>
        <li>
          <Link
            to="/studio"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            STUDIO<sup> new</sup>
          </Link>
        </li>
        <div className={css.input}>
          <span>&#9740;</span>
          <input
            type="text"
            placeholder="search for products, brand and more"
          />
        </div>
        <li>
          <Link
            to="/profile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/wishlist"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            WishList
          </Link>
        </li>
        <li>
          <Link
            to="/bag"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Bag
          </Link>
        </li>
      </ul>
      {showPopup && <PopUp />}
    </div>
  );
}
