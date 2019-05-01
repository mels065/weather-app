import React from 'react';
import PropTypes from 'prop-types';

const LanguageToggleContext = React.createContext();

export class LanguageToggleProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'American English',
      changeToAmericanEnglish: jest.mock(),
      changeToJapanese: jest.mock(),
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

export const LanguageToggleConsumer = ({ children }) => children({
  lang: 'American English',
  changeToAmericanEnglish: jest.mock(),
  changeToJapanese: jest.mock(),
});
