import { ListItem } from "./Item";
import Item from "./Item";
import uuid from 'react-uuid';


interface ListProps {
    list: ListItem[],
    onClickDelete: (id: number) => void,
    onClickUpdate: () => void,
}

const List = ({list = [], onClickDelete, onClickUpdate}: ListProps) => {
  return (
    <div className="list">
    { list.map((item: { date: string; distance: string; id: number })=> (
        <Item id={item.id} onClickDelete={onClickDelete} onClickUpdate={onClickUpdate} key={item.id}  date={item.date} distance={item.distance}/>
    ))}
    </div>
  )
}

export default List;