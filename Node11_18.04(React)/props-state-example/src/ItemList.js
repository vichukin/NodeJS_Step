import Item from "./Item"
export default function ItemList(props)
{
    return <>
    <h2>{props.data.title}</h2>
    <ul>
        {
            props.data.items.map(elem=>{
                return <Item name={elem} key={elem}></Item>
            })
        }
    </ul>
    </>
}