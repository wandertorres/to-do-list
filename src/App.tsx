import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, description: 'Comprar boldo', done: false },
    { id: 2, description: 'Estudar typescript', done: true }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
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
