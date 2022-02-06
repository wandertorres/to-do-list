import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    let id;

    if(newList.length === 0)
      id = 1;
    else
      id = newList[newList.length-1].id + 1;

      newList.push({
        id: id,
        description: taskName,
        done: false
      });

    setList(newList);
  }

  const changeDone = (id: number) => {
    let newList = [...list];
    newList[id-1].done = !newList[id-1].done;
    
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Heading>
          Lista de Tarefas
        </C.Heading>

        <AddArea handleAddTask={handleAddTask} />
        
        {list.map((item, index) => (
          <ListItem key={index} item={item} changeDone={changeDone} /> 
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
