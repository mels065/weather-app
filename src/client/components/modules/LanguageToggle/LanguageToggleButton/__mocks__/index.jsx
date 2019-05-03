import React from 'react';
import PropTypes from 'prop-types';

const LanguageToggleButton = ({ onClick, icon, lang }) => (
    <button
      onClick={onClick}
    >
      {`${lang} ${icon}`}
    </button>
);

export default LanguageToggleButton;
LanguageToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
