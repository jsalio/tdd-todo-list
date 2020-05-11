import * as React from 'react';

export interface ITaskListProps {
    tasks: string[];
}

export const TaskList: React.FC<ITaskListProps> = (prop) => {
    return <ul>
        {prop.tasks.map(e => (<li>{e}</li>))}
    </ul>
}