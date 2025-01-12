import css from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.f1}>
        <span>
          <h4>ONLINE SHOPPING</h4>

          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home&Living</li>
          <li>Beauty</li>
          <li>Gift Cards</li>
          <li>Myntra Insider</li>

          <h4>USEFUL LINKS</h4>

          <li>Blog</li>
          <li>Careers</li>
          <li>Site Map</li>
          <li>Corporate Information</li>
          <li>Whitehat</li>
          <li>Cleartrip</li>
        </span>
        <span>
          <h4>CUSTOMER POLICIES</h4>

          <li>Contact Us</li>
          <li>FAQ</li>
          <li>T&C</li>
          <li>Terms Of Use</li>
          <li>Track Orders</li>
          <li>Shipping</li>
          <li>Cancellation</li>
          <li>Returns</li>
          <li>Privacy policy</li>
          <li>Grievance Officer</li>
        </span>
        <span>
          <h4>EXPERIENCE OUR APP ON MOBILE</h4>
          <div>
            <img src="" alt="" />
          </div>
          <h4>KEEP IN TOUCH</h4>
          <img src="" alt="" />
        </span>
      </div>

      <div>
        <div className={css.f2}>
          <h4>POPULAR SEARCHES </h4>
          <hr />
        </div>
        <div className={css.p1}>
          <p>
            Makeup Dresses For Girls T-Shirts Sandals Headphones Babydolls
            Blazers For Men Handbags Ladies Watches Bags Sport Shoes Reebok
            Shoes Puma Shoes Boxers Wallets Tops Earrings Fastrack Watches
            Kurtis Nike Smart Watches Titan Watches Designer Blouse Gowns Rings
            Cricket Shoes Forever 21 Eye Makeup Photo Frames Punjabi Suits
            Bikini Myntra Fashion Show Lipstick Saree Watches Dresses Lehenga
            Nike Shoes Goggles Bras Suit Chinos Shoes Adidas Shoes Woodland
            Shoes Jewellery Designers Sarees
          </p>
          <div className={css.p2}>
            <p>In case of any concern,<a href="/contact-us">Contact Us</a></p>
            <p>2024 www.vr-shopping.com.All rights reserved.</p>
            <p>An e-Commerce company</p>
          </div>
        </div>
      </div>
      <div className={css.f3}></div>
      <div className={css.f4}></div>
    </div>
  );
}
