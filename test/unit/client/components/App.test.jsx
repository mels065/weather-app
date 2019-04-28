import React from 'react';
import { render } from 'react-testing-library';
import App from '../../../../src/client/components/App';
import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app')).toBeInTheDocument();
  });
});
