import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserCard from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    user: {
      name: {
        first: 'John',
        last: 'Doe',
      },
      picture: {
        large: 'large.jpg',
      },
      location: {
        city: 'Los Angeles',
        state: 'California',
      },
      email: 'john@example.com',
    }
  }

  const wrapper = mount(<UserCard {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('UserCard', () => {

  const { wrapper, props } = setup();

  it('should display user name', () => {
    expect(wrapper.find('h2').text())
      .toEqual(`${props.user.name.first} ${props.user.name.last}`.toUpperCase());
  });

  it('should display user location', () => {
    expect(wrapper.find('h4').text())
      .toEqual(`${props.user.location.city}, ${props.user.location.state}`.toUpperCase());
  });

  it('should display user email', () => {
    expect(wrapper.find('h5').text())
      .toEqual(props.user.email);
  });

  it('should display user avatar', () => {
    const avatar = wrapper.find('Avatar');
    expect(avatar.props().src).toEqual(props.user.picture.large);
  });
});