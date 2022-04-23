import { useContext } from "react"
import { ItemData } from "../pages"

export const Item = () => {
    const clickItem = useContext(ItemData);

    return (
        <div onClick={() => {clickItem}} className= {clickItem ? "active" : ""} ></div>
    )
}