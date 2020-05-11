import * as React from 'react';

export interface IAddTaskProps {
    addTask: () => void;
}

export const AddTask: React.FC<IAddTaskProps> = (prop) => {
    return (<button onClick={() => prop.addTask()}></button>)
}