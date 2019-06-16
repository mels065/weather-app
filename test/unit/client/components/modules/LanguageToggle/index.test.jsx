import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import LanguageToggle from '../../../../../../src/client/components/modules/LanguageToggle';

jest.mock('../../../../../../src/config', () => (
  {
    lang: {
      US: 'American English',
      JA: '日本語',
    }
  }
));

jest.mock('../../../../../../src/client/components/context/LanguageToggleContext');
jest.mock('../../../../../../src/client/components/modules/LanguageToggle/LanguageToggleButton');

describe('<LanguageToggle />', () => {
  it('renders', () => {
    const { queryByTestId } = render(<LanguageToggle />);
    expect(queryByTestId('language-toggle'));
  })
});
