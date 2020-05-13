import * as React from 'react';
import { TaskList, ITaskListProps } from '../components/task-list';
import { shallow } from 'enzyme';

describe('Test list', () => {
    let prop: ITaskListProps = {
        tasks: []
    }
    it('Render without crash', () => {
        let render = shallow(<TaskList {...prop} />)
    });
    it('Render un-sorted list', () => {
        let render = shallow(<TaskList {...prop} />);
        let c = render.find('ul');
        expect(c.length).toBe(1)
    });
    it('Render un-sorted list with one element', () => {
        let tasks = ['sample'];
        let render = shallow(<TaskList tasks={tasks} />);
        let liwrapper = render.find('li');
        expect(liwrapper.length).toBe(1)
        let checkboxWrapper = render.find('input');
        expect(checkboxWrapper.length).toBe(1)
    })
    it('Render un-sorted list with elements', () => {
        let tasks = ['sample', '123', 'lkaghsd', '123456'];
        let render = shallow(<TaskList tasks={tasks} />);
        let c = render.find('li');
        expect(c.length).toBe(tasks.length)
    })
});