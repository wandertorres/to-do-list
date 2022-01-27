import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, description: 'Comprar boldo', done: false },
    { id: 2, description: 'Estudar typescript', done: true }
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Heading>
          Lista de Tarefas
        </C.Heading>
        
        {list.map((item, index) => (
          <ListItem key={index} item={item} /> 
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
