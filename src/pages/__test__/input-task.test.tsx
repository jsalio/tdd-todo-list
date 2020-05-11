import * as React from 'react';
import { InputTask } from '../components/input-task';
import { shallow } from 'enzyme';

describe('Test on Input', () => {
    let mountedButton: any;
    beforeEach(() => {
        mountedButton = shallow(<InputTask />);
    });
    it('Render without crash', () => {
        let value = shallow(<InputTask />);
    });
    it('Render a single input', () => {
        const input = mountedButton.find('input');
        expect(input.length).toBe(1);
    });
    it('load with value', () => {
        let props = {
            defaultValue: 'sample'
        }
        const input = shallow(<InputTask defaultValue={props.defaultValue} />).find('input');
        expect(input.isEmpty()).toBe(false);
    });
    it('load with empty default value', () => {
        let props = {
            defaultValue: ''
        }
        const input = shallow(<InputTask defaultValue={props.defaultValue} />).find('input');
        expect(input.props().value).toBe('');
    });
    it('load with default value', () => {
        let props = {
            defaultValue: '123456'
        }
        const input = shallow(<InputTask defaultValue={props.defaultValue} />).find('input');
        expect(input.props().value).toBe('123456');
    });
})