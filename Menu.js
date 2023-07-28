import React from "react";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import "./Menu.css";
// import Navigation from "./Navigation";

function Menu() {
  return (
    <>
    {/* <Navigation/> */}
    <body className="imgg">
      <h1><center><div className="nametop">Find your next Adventure  !</div></center></h1>
      <div className="menu">
        <div className="fendu">
          <pre>
        <input type="text" placeholder="Location" className="searchfield" />
        <button className="searchhh">Search</button>
        </pre>
        </div>
      <h1 className="menuTitle"> </h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
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
    </div>
    </body>
        </>
  );
}

export default Menu;