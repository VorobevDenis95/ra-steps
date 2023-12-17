interface ListItem {
    date: string,
    distance: string,
    id: number,
    onClickDelete: (id: number) => void,
    onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const Item = ({date, distance, id, onClickDelete, onClickUpdate}:ListItem) => {
  return (
    <div className="list__item" key={id}>
        <span className="list__data">{date}</span>
        <span className="list__distance">{distance}</span>
        <button type="button" onClick={onClickUpdate}>✏️</button>
        <button type="button" onClick={onClickDelete}>X</button>
    </div>
  )
}

export default Item;
export type { ListItem };
