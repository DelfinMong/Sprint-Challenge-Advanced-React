import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Playercard from "./components/PlayerCard"

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test(' rtl renders w/o crashing', () => {
  render(<App />);
});

test('searching for card and follower', () => {
  const { getByText } = render(<Playercard />);
  getByText(/searches/i);
  // getByText(/Followers/i);
});

test('renders correctly when there are no items', () => {
  const tree = renderer.create(<Playercard />).toJSON();
  expect(tree).toMatchSnapshot();
});



