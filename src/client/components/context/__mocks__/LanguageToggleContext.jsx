import React from 'react';
import PropTypes from 'prop-types';

const LanguageToggleContext = React.createContext();

export const changeToAmericanEnglish = jest.mock();
export const changeToJapanese = jest.mock();

export class LanguageToggleProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'American English',
      changeToAmericanEnglish,
      changeToJapanese,
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
