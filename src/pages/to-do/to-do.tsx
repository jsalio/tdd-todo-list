import * as React from 'react';
import { InputTask } from '../components/input-task';
import { AddTask } from '../components/add-task';
import { TaskList } from '../components/task-list';

type AppState = {
    tasks: string[];
    defaultValue: string
}

export default class Todo extends React.PureComponent<any, AppState> {

    /**
     *
     */
    constructor(props: any) {
        super(props);
        this.state = {
            tasks: [],
            defaultValue: ''
        }
    }

    render() {
        return <div>
            <InputTask defaultValue={this.state.defaultValue} handlerChange={(e) => this.setState({ defaultValue: e })} />
            <AddTask addTask={() => {
                let currentStateList = this.state.tasks;
                currentStateList.push(this.state.defaultValue);
                this.setState({
                    tasks: currentStateList, defaultValue: ''
                })
            }} />
            <TaskList tasks={this.state.tasks} />
        </div>
    }
}