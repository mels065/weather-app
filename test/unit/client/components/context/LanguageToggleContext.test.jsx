import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import 'jest-dom/extend-expect';

import {
  LanguageToggleProvider,
  LanguageToggleConsumer,
} from '../../../../../src/client/components/context/LanguageToggleContext';

jest.mock('../../../../../src/config', () => (
  {
    lang: {
      US: 'American English',
      JA: '日本語',
    }
  }
));

const US = 'American English';
const JA = '日本語';

afterEach(cleanup);

describe('LanguageToggle context', () => {
  it('has the correct default state', () => {
    const { queryByText } = render(
      <LanguageToggleProvider>
        <LanguageToggleConsumer>
          {context => (
            <div>{context.lang}</div>
          )}
        </LanguageToggleConsumer>
      </LanguageToggleProvider>
    );

    expect(queryByText(US)).toBeInTheDocument();
  });

  it('can change to `日本語` and back to `American English`', () => {
    const { queryByText } = render(
      <LanguageToggleProvider>
        <LanguageToggleConsumer>
          {context => (
            <div>
              <button onClick={context.changeToJapanese}>Click!</button>
              <button onClick={context.changeToAmericanEnglish}>Click2!</button>
              <div>{context.lang}</div>
            </div>
          )}
        </LanguageToggleConsumer>
      </LanguageToggleProvider>
    );

    fireEvent.click(queryByText('Click!'));
    expect(queryByText(JA)).toBeInTheDocument();

    fireEvent.click(queryByText('Click2!'));
    expect(queryByText(US)).toBeInTheDocument();
  });
})
