import { FormEvent, useState } from 'react'
import './App.css'
import List from './components/List'
import uuid from 'react-uuid'
import { ListItem } from './components/Item'
function App() {

  // const list: { date: string; distance: string }[] = [] ;

  const [list, setList] = useState<ListItem>([])

  const [data, setData] = useState({
    date: '',
    distance: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      id: uuid(),
    }));
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (list.map(it => it.date).includes(data.date)) {
      // setList(list.map(element => {
      //   if (element.date === data.date) {
      //     element.distance = '12';
      //   }
      // }))

      const newList = list.slice(0);
      const el = newList.find(el => el.date === data.date);
      console.log(data);
      
      el.distance = String(Number(el.distance) + Number(data.distance));  
      console.log(data);
      setList([...newList]);
    } else {
      setList((prevState) => {
        return [...prevState, data]
      })
      // setList([...list, data].sort((a, b) => {
      //   if (a.date < b.date) return -1;
      //   if (a.date > b.date) return 1;
      //   if (a.date === b.date) return 0;
      // }))
      console.log(data);
    }
  }

  const handleDeleteItem = (id: number) :void=> {
    setList((prevState) => {
      prevState.filter((list) => list.id !== id)
    })
    console.log(id);
  }

  const onClickUpdate = (e: React.MouseEvent<HTMLButtonElement>) :void=> {
    console.log(e)
  }

  return (
    <div className="container">
          <form onSubmit={onSubmit}>
            <input type="date" id='date' onChange={onChange} required/>
            <input type='number' step={0.1} id='distance' onChange={onChange} required/>
            <button type="submit">Ок</button>
          </form>
          <List onClickUpdate={onClickUpdate} onClickDelete={handleDeleteItem} list={list}/>

    </div>

  )
}

export default App
