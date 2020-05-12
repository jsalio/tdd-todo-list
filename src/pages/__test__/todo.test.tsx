import * as React from 'react';
import Todo from '../to-do/to-do';
import { shallow, mount } from 'enzyme';

describe('Test todo tasks', () => {
    it('Render without crash', () => {
        let component = shallow(<Todo />)
    });
    it('Render a Add task button', () => {
        let component = mount(<Todo />)
        let addTaskBtn = component.find('AddTask');
        expect(addTaskBtn.length).toBe(1)
    })

    it('Render a input box', () => {
        let component = shallow(<Todo />)
        let addTaskBtn = component.find('InputTask');
        expect(addTaskBtn.length).toBe(1)
    })

    it('Render a List', () => {
        let component = shallow(<Todo />)
        let addTaskBtn = component.find('TaskList');
        expect(addTaskBtn.length).toBe(1)
    })

    it('Simulate add task on the button', () => {
        let componentW = mount(<Todo />)
        componentW.setState({ tasks: [], defaultValue: 'sample1' });
        let button = componentW.find('AddTask');
        button.simulate('click');
        expect((componentW.state() as any).tasks.length).toEqual(1)
    });

    it('Simulated user input', () => {
        let componentW = mount(<Todo />)
        componentW.setState({ tasks: ['1'], defaultValue: 'sample1' });
        let C = componentW.find('InputTask');
        expect((C.props() as any).defaultValue).toEqual('sample1')
    });

    it('Simulate add task on the list', () => {
        let expectedContent = ['1', 'sample1']
        let componentW = mount(<Todo />)
        componentW.setState({ tasks: ['1'], defaultValue: 'sample1' });
        let button = componentW.find('AddTask');
        button.simulate('click');
        expect((componentW.state() as any).tasks.length).toEqual(2)
        let taskListW = componentW.find('TaskList');
        expect((taskListW.props() as any).tasks).toEqual(expectedContent)
    });

})