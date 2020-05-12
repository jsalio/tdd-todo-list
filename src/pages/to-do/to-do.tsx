import * as React from 'react';
import { InputTask } from '../components/input-task';
import { AddTask } from '../components/add-task';
import { TaskList } from '../components/task-list';

export default class Todo extends React.PureComponent<any, any> {

    /**
     *
     */
    constructor(props: any) {
        super(props);
        this.state = {
            tasks: ['sample'],
            defaultValue: ''
        }
    }

    render() {
        return <div>
            <InputTask defaultValue={this.state.defaultValue} />
            <AddTask addTask={() => {
                let currentStateList = this.state.tasks;
                currentStateList.push(this.state.defaultValue);
                this.setState({ tasks: currentStateList })
            }} />
            <TaskList tasks={this.state.tasks} />
        </div>
    }
}