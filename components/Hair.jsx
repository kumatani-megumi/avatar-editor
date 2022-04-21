import { useState } from "react"
import { HairData } from "../src/HairData"
import { Item } from "../components/Item"

export const Hair = (props) => {
    const {ItemData} = props

    return (
      <>
      {HairData.map((item,id) =>
      <div className="hairItem" onClick={() => setHairItem(id)}>
        {item.contents}
      </div>
      )}
      </>
    )
}