import React from 'react';

import LanguageToggleButton from './LanguageToggleButton';
import { LanguageToggleConsumer } from '../../context/LanguageToggleContext';

import { lang } from '../../../../config';

import './style.scss';

const LanguageToggle = () => (
  <LanguageToggleConsumer>
    {
      context => (
        <ul className="language-toggle" data-testid="language-toggle">
          <li>
            <LanguageToggleButton
              onClick={() => { context.changeToAmericanEnglish() }}
              icon={'america_flag.svg'}
              lang={lang.US}
            />
          </li>
          <li>
            <LanguageToggleButton
              onClick={() => { context.changeToJapanese() }}
              icon={'japan_flag.svg'}
              lang={lang.JA}
            />
          </li>
        </ul>
      )
    }
  </LanguageToggleConsumer>
);

export default LanguageToggle;
