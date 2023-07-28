import React from "react";
import "./About.css";
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from 'react-router-dom';
import { MenuFendu } from "./MenuFendu";
import MenuItem from "./MenuItem";
import "./Menu.css";
// import Screenshot from './Screenshot 2023-07-13 235057.png'
export default function App() {
    const nav = useNavigate();
    const handleAbout=()=>{
     nav("/About")
    }
   const sliderImages = [
      {
         url: "https://b2c-admin-storage.s3-ap-southeast-1.amazonaws.com/CMS/Prod/995x360rr.jpg",
      },
      {
         url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1617092437646/hotel-offers.jpg",
      },
      {
         url: "https://gos3.ibcdn.com/top-1465895148.jpg",
      },
      
   ];
   const sliderImage = [
      {
         url: "https://cdn.zoutons.com/images/originals/blog/main-banner_1681462069.png",
      },
      {
         url: "https://cdn.zoutons.com/images/originals/blog/1687336672239.jpg_1687336676.png",
      },
      {
         url: "https://ik.imagekit.io/tvlk/image/imageResource/2023/05/01/1682912638964-db46fa080bc2a4300a0219a058188d64.png?tr=q-75",
      },
   ];
   
   return (
      // <div>
      //    <h3 class="head">
      //      About Us
      //    </h3>
      <>
      
      <div className="lycra">
         <img src="https://gos3.ibcdn.com/top-1519650394.jpg" width="1500px" height="200px" ></img>
      </div>
            
            <div className="MenuFendu">
        {MenuFendu.map((menuItem, key) => {
          return (
            <MenuItem
            key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              />
          );
        })}
      </div>
      <div className="wh">
         <div style={{ marginLeft: "900px" ,marginTop:"400px"}}>
            <p><h3>Upto 30% discount on Domestic Booking</h3></p>
         <SimpleImageSlider
            width={600}
            height={200}
            images={sliderImages}
            showNavs={true}
            />
      </div>
      </div>
      <div className="wf">
         <div style={{ marginLeft: "20px" ,marginTop:"-200px"}}>
         <p><h3>Upto 20% discount on International Booking</h3></p>
         <SimpleImageSlider
            width={600}
            height={200}
            images={sliderImage}
            showNavs={true}
            />
            </div>
            </div>
            
            
   {/* </div> */}
         <div>

            <p></p>
      </div>
      
      </>
   );
}