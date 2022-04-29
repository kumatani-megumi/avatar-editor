import { useContext } from "react"
import { HairData } from "../src/HairData"
import { ItemData } from "../pages"

export const Hair = () => {
  const {clickItem,setClickItem} = useContext(ItemData);

    return (
      <>
      {HairData.map((hairItem) =>
              <div className="Item" key={hairItem} onClick={()=> setClickItem({...clickItem,hair: hairItem.hair})}>{hairItem.hair}
              </div>
      )}
      </>
    )
}