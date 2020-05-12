import * as React from 'react';

export interface IInputProps {
    defaultValue: string;
    handlerChange: (value: string) => void
}

export const InputTask: React.FC<IInputProps> = (props) => {
    return <input value={props.defaultValue} onChange={(e) => props.handlerChange(e.target.value)} />
}