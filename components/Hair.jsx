import { useContext, useState } from "react"
import { HairData } from "../src/HairData"
import { Item } from "../components/Item"


export const Hair = () => {

    return (
      <>
      <Item className="hairItem">
      {HairData.map((item) =>
        {item.hair}
      )}
      </Item>

      </>
    )
}