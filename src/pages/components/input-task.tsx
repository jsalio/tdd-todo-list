import * as React from 'react';

export interface props {
    defaultValue: string
}

export const InputTask: React.FC<any> = (props: props) => {
    return <input value={props.defaultValue} />
}