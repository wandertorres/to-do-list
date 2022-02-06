import { useState, KeyboardEvent } from 'react';
import * as C from './style';

type Props = {
    handleAddTask: (taskName: string) => void
}

export const AddArea = ({ handleAddTask }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            handleAddTask(inputText);
            setInputText('');
        }
    }

    return(
        <C.Container>
            <div className="plus">➕</div>
            <input 
                type="text" 
                placeholder='Nova tarefa...'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}