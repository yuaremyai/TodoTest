import 'styled-components'

export interface Todo {
    text: string;
    id: number;
    key: number;
    checked: boolean;
    editMode: boolean;
}

export interface ChildrenProp{
    children: React.ReactNode
}

declare module 'styled-components'{

    export interface FlexStyles{
        align: string;
        justify: string;
    }
}
