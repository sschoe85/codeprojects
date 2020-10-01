import React, { useState } from "react"
import MenuItem from "./MenuItem"
import MenuItemList from "./MenuItemList"

const Menu = ({ open }) => {
  return (
    <MenuItemList open={open}>
      <MenuItem to={"/"} text="Home" />
      <MenuItem to={"/faq"} text="FAQ" />
      <MenuItem to={"/faq"} text="FAQ" />
      <MenuItem to={"/faq"} text="FAQ" />
      <MenuItem to={"/faq"} text="FAQ" />
      <MenuItem to={"/faq"} text="cvffQ" />
    </MenuItemList>
  )
}

export default Menu
