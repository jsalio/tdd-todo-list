import * as React from 'react';
import { shallow } from 'enzyme';
import { TodoItemComponent, TodoItemProps } from '../components/to-do-item';
import { TodoItem } from '../../typings'

describe('Testing a single todo item', () => {
    let props: TodoItemProps = {
        item: {
            checked: false,
            label: 'sample',
        },
        onChecked: () => jest.fn()
    };

    beforeEach(() => {

    })

    it('Render withot crash', () => {
        let button = shallow(<TodoItemComponent {...props} />);
    });
    it('Should be render a li', () => {
        let todoItemWrpper = shallow(<TodoItemComponent {...props} />);
        let liWrapper = todoItemWrpper.find('li')
        expect(liWrapper.length).toBe(1)

    })
    it('Should be render a input', () => {
        let todoItemWrpper = shallow(<TodoItemComponent {...props} />);
        let liWrapper = todoItemWrpper.find('input')
        expect(liWrapper.length).toBe(1)

    })
})