import css from "./Home_Page.module.css";
import Card from "./Card";



export default function Home_Page() {

  const cardDetails = [
    {
      imgUrl: "https://images.pexels.com/photos/29906028/pexels-photo-29906028/free-photo-of-black-and-white-clothing-display-in-retail-shop.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgName: 'globalbrand',
      id:'1'
    },
    {
      imgUrl: "https://images.pexels.com/photos/10228202/pexels-photo-10228202.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgName: 'globalbrand',
      id:'2'
    },
    {
      imgUrl: "https://images.pexels.com/photos/10113285/pexels-photo-10113285.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgName: 'globalbrand',
      id:'3'
    },
    {
      imgUrl: "https://images.pexels.com/photos/18339393/pexels-photo-18339393/free-photo-of-catrina.png?auto=compress&cs=tinysrgb&w=600",
      imgName: 'globalbrand',
      id:'4'
    },
    {
      imgUrl: "https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgName: 'globalbrand',
      id:'5'
    },
    {
      imgUrl: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=600",
      imgName: 'globalbrand',
      id:'6'
    },
    {
      imgUrl: "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'globalbrand',
      id:'7'
    },
    {
      imgUrl: "https://images.pexels.com/photos/17245493/pexels-photo-17245493/free-photo-of-a-man-wearing-sunglasses-and-a-green-sweater.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'globalbrand',
      id:'8'
    },
    {
      imgUrl: "https://images.pexels.com/photos/17244589/pexels-photo-17244589/free-photo-of-a-man-is-doing-a-trick-on-his-skateboard.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'globalbrand',
      id:'9'
    },
    {
      imgUrl: "https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'10'
    },
    {
      imgUrl: "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'11'
    },
    {
      imgUrl: "https://images.pexels.com/photos/5705477/pexels-photo-5705477.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'12'
    },
    {
      imgUrl: "https://images.pexels.com/photos/7764611/pexels-photo-7764611.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'13'
    },
    {
      imgUrl: "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'14'
    },
    {
      imgUrl: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'15'
    },
    {
      imgUrl: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'16'
    },
    {
      imgUrl: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'17'
    },
    {
      imgUrl: "https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgName: 'medalbrand',
      id:'18'
    },

  ]

  
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
      <pre>
        <b>M E D A L   W O R T H Y   B R A N D S   T O   B A G </b>
      </pre>

      <div className={css.medalbrand}>
      <Card cardDetails={cardDetails} brands={"medalbrand"} />
         
      </div>
      <pre>
        <b>G R A N D   G L O B A L   B R A N D S </b>
      </pre>

      <div className={css.globalbrand}>
      <Card cardDetails={cardDetails} brands={"globalbrand"}/>
         
      </div>
      <pre>
        <b>S H O P   B Y   C A T E G O R Y </b>
      </pre>
      <div className={css.categorybrand}>
      <Card cardDetails={cardDetails} brands={"C A T E G O R Y"}/>
        
         
      </div>
    </div>
  );
}
