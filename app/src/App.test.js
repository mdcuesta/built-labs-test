import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router';
import { Route, BrowserRouter as Router } from 'react-router';

import GridView from './components/grid-view';
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Grid view', () => {
  const wrapper = mount(<MemoryRouter initialEntries={[ '/' ]}>
    <App />
  </MemoryRouter>);

  expect(wrapper.find(GridView)).toHaveLength(1);
});
