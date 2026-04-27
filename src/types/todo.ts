export type ToDo = {
    id: number;
    text: string;
    isDone: boolean;
}


export type TextProps = {
    todo: ToDo;
    onDelete: () => void;
    onDone: () => void; 
   
}

export type TodoInputProps = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>
    onEnter: () => void;
}