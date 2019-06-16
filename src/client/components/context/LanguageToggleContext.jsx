import React from 'react';
import PropTypes from 'prop-types';

import { lang } from '../../../config';

const LanguageToggleContext = React.createContext();

export class LanguageToggleProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: lang.US,
      changeToAmericanEnglish: () => {
        this.setState({
          lang: lang.US,
        });
      },
      changeToJapanese: () => {
        this.setState({
          lang: lang.JA,
        });
      },
    };
  }

  render() {
    const { children } = this.props;
    return (
      <LanguageToggleContext.Provider value={this.state}>
        {children}
      </LanguageToggleContext.Provider>
    );
  }
}
LanguageToggleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const LanguageToggleConsumer = LanguageToggleContext.Consumer;
