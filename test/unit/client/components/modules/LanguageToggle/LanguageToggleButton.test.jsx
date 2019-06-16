import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import 'jest-dom/extend-expect';

import LanguageToggleButton from '../../../../../../src/client/components/modules/LanguageToggle/LanguageToggleButton';

jest.mock('../../../../../../src/client/components/context/LanguageToggleContext');

let element;
beforeEach(() => {
  element = (
    <LanguageToggleButton
      onClick={jest.fn()}
      icon="japan-flag.svg"
      lang="日本語"
    />
  );
})

afterEach(cleanup);

describe('<LanguageToggleButton />', () => {
  it('renders', () => {
    const { queryByTestId } = render(element);
    expect(queryByTestId('language-toggle-btn')).toBeInTheDocument();
  });

  it('should be disabled if `context.lang` matches with `prop.lang`', () => {
    const { queryByTestId, rerender } = render(element);
    expect(queryByTestId('language-toggle-btn')).not.toBeDisabled();
    rerender(
      <LanguageToggleButton
        onClick={jest.fn()}
        icon="america-flag.svg"
        lang="American English"
      />
    )
    expect(queryByTestId('language-toggle-btn')).toBeDisabled();
  });

  it('should fire `onClick` event when clicked', () => {
    const fn = jest.fn();
    const { queryByTestId } = render(
      <LanguageToggleButton
        onClick={fn}
        icon="japan-flag.svg"
        lang="日本語"
      />
    );

    fireEvent.click(queryByTestId('language-toggle-btn'));
    expect(fn.mock.calls.length).toBe(1);
  });
});
