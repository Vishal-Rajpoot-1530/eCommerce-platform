import css from "./Home_Page.module.css";

export default function Home_Page() {
  return (
    <div className={css.homepage}>
      <div>
        <img src="bodyImage.png" alt="front image " />
      </div>
      <div className={css.topbrand}>
        <img src="p1.png" alt="image 1" />
        <img src="p2.png" alt="image 2" />
        <img src="p3.png" alt="image 3" />
        <img src="p4.png" alt="image 4" />
      </div>
      <pre><b>M E D A L   W O R T H Y   B R A N D S   T O   B A G </b></pre>
       
      <div className={css.topbrand}>
        <img src="p1.png" alt="image 1" />
        <img src="p2.png" alt="image 2" />
        <img src="p3.png" alt="image 3" />
        <img src="p4.png" alt="image 4" />
      </div>
      <pre><b>G R A N D    G L O B A L    B R A N D S  </b></pre>
       
      <div className={css.topbrand}>
        <img src="p1.png" alt="image 1" />
        <img src="p2.png" alt="image 2" />
        <img src="p3.png" alt="image 3" />
        <img src="p4.png" alt="image 4" />
      </div>
      <pre><b>S H O P   B Y   C A T E G O R Y </b></pre>
    </div>
  );
}
