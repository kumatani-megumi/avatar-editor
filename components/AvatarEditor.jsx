import { useContext } from "react"

export const AvatarEditor = () => {
    const clickItem = useContext(ItemData);

    const Avatar = {
        face: "aaa",
        hair: "aaa",
        eyebrows: "aaa",
        eyes: "aaaa",
        nose: "aaa",
        mouth: "aaa",
    }

    return (
        <Avatar onChange={clickItem}>

        </Avatar>
    )

}
