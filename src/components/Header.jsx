import css from './Header.module.css'
export default function Header() {
    return (
        <div className={css.header}>
            <ul>
                <img src="react.svg" alt="Logo" />
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>HOME&LIVING</li>
                <li>BEAUTY</li>
                <li>STUDIO<sup> new</sup></li>
                <div className={css.input}>
                <span>&#9740;</span>
                <input type="text" placeholder="search for products, brand and more" />
                </div>
                <li>Profile</li>
                <li>WishList</li>
                <li>Bag</li>
            </ul>

        </div>
    )
}