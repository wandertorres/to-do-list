import { useState } from 'react';
import * as C from './style';
import { Item } from '../../types/Item';

type Props = {
    item: Item,
    changeDone: (id: number) => void
}

export const ListItem = ({ item, changeDone }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)} 
                onClick={() => changeDone(item.id)}
            />
            <label>
                {item.description}     
            </label>
            <span>✖️</span>
        </C.Container>
    );
}