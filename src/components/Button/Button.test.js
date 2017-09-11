import React from 'react';
import {shallow} from 'enzyme';

import Button from './Button';

describe('Button', function() {
  test('should call onClick when clicking on the button', function() {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button onClick={onClickMock}/>);

    const buttonWrap = wrapper.find('button');
    buttonWrap.simulate('click');

    expect(onClickMock).toBeCalled();
  });

  test('should render the wg-loading icon the loading prop is true', function() {
    const wrapper = shallow(<Button loading/>);
    const iconWrapper = wrapper.find('i');

    expect(iconWrapper.hasClass('wg-loading')).toBeTruthy();
  });

  describe('Tooltip', function() {
    test('should show and hide the tooltip when mouse enters and leave the disabled button', function() {
      const wrapper = shallow(<Button disabled/>);

      const buttonWrap = wrapper.find('button');
      buttonWrap.simulate('mouseOver');

      expect(wrapper.state('showTooltip')).toBeTruthy();
      buttonWrap.simulate('mouseLeave');
      expect(wrapper.state('showTooltip')).toBeFalsy();
    });

    test('should do nothing if button is not disabled', function() {
      const wrapper = shallow(<Button/>);

      const buttonWrap = wrapper.find('button');

      buttonWrap.simulate('mouseOver');
      expect(wrapper.state('showTooltip')).toBeFalsy();

      buttonWrap.simulate('mouseLeave');
      expect(wrapper.state('showTooltip')).toBeFalsy();
    });
  });
});
