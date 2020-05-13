import * as React from 'react';

export interface ITaskListProps {
    tasks: string[];
}

export const TaskList: React.FC<ITaskListProps> = (prop) => {
    return <ul>
        {prop.tasks.map((e, i) => (<li key={i}><input key={e} type="checkbox" />  {e}</li>))}
    </ul>
}