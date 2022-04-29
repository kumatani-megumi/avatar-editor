import { useContext } from "react"
import { FaceData } from "../src/FaceData"
import { ItemData } from "../pages"

export const Face = () => {
  const {clickItem,setClickItem} = useContext(ItemData);

    return (
      <>
      {FaceData.map((faceItem) =>
              <div className="Item" key={faceItem} onClick={()=> setClickItem({...clickItem,face: faceItem.face})}>{faceItem.face}
              </div>
      )}
      </>
    )
}