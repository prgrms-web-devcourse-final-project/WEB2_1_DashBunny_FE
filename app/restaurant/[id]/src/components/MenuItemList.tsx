import { MenuItem } from "@/components/restaurant/MenuItem"
import { UsersMenuDto } from "@/types/Store"
import React from "react"
interface MenuItemProps {
  menus: UsersMenuDto[]
  storeId: string
}
export default function MenuItemList({ menus, storeId }: MenuItemProps) {
  return (
    <div className="space-y-4">
      {menus.map((menu) => {
        return (
          <MenuItem
            key={menu.menuId}
            name={menu.menuName}
            price={menu.price}
            description={menu.menuContent}
            image={menu.menuImage}
            menuId={menu.menuId}
            storeId={storeId}
          />
        )
      })}
    </div>
  )
}
