import * as React from 'react';
import { shallow } from 'enzyme';
import { AddTask, IAddTaskProps } from '../components/add-task';

describe('Test on Click', () => {
    let mountedButton: any;
    let prop: IAddTaskProps = {
        addTask: jest.fn()
    }
    beforeEach(() => {
        mountedButton = shallow(<AddTask {...prop} />);
    });

    it('Render withot crash', () => {
        let button = shallow(<AddTask {...prop} />);
    });

    it('Render with button', () => {
        const input = mountedButton.find('button');
        expect(input.length).toBe(1);
    });

    it('Can be click', () => {
        const click = mountedButton
        click.simulate('click')
    });
    it('using callback', () => {
        const mockCallback = jest.fn();
        const click = shallow(<AddTask addTask={mockCallback} />);
        click.simulate('click');
        expect(mockCallback.mock.calls.length).toEqual(1);
    });
})