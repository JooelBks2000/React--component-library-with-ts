import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button ,{ButtonProps,ButtonSize,ButtonType}from './button'

//创建可监控的模拟函数
const defaultProps = {
    onClick: jest.fn()
}

const testProps:ButtonProps={
    btnType:ButtonType.Primary,
    size:ButtonSize.Large,
    className:'class'
}
const disabledProps:ButtonProps={
    disabled:true,
    onClick:jest.fn()
}

describe('test Button Component', () => {
    it('should render button correctly', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        //触发用户事件
        fireEvent.click(element)
        //函数是否被调用
        expect(defaultProps.onClick).toHaveBeenCalled()
    });
    it('should render correct component with different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg class')
    });
    it('should render a correct link button', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href='http://dddd'>Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    });
    it('should render the disabled button', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    });
})