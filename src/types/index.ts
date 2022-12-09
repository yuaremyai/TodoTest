
export interface Todo {
    text: string;
    id: number;
    key: number;
    checked: boolean;
    editMode: boolean;
}



export interface ButtonProps{
    size: string;
    bgColor: string;
    shadowed?: boolean;
    handleClick: () => void;
    src: string;
}

