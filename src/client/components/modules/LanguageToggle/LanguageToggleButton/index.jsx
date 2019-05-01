import React from 'react';
import PropTypes from 'prop-types';

import { LanguageToggleConsumer } from '../../../context/LanguageToggleContext';

import './style.scss';

const LanguageToggleButton = ({ onClick, icon, lang }) => (
  <LanguageToggleConsumer>
    {context => (
      <button
        className="language-toggle-btn"
        data-testid="language-toggle-btn"
        onClick={onClick}
        disabled={context.lang === lang}
        style={{
          background: `url(/icons/${icon}) no-repeat`,
        }}
      />
    )}
  </LanguageToggleConsumer>
);

export default LanguageToggleButton;
LanguageToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
