import * as React from 'react';
import { TodoItem } from '../../typings';

export type TodoItemProps = {
    item: TodoItem;
    onChecked: (label: string) => void;
}

export const TodoItemComponent: React.FC<TodoItemProps> = (props) => {
    return <li><input type='checkbox' checked={props.item.checked} />  {props.item.label}</li>
}