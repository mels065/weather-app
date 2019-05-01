import React from 'react';

import { LanguageToggleProvider } from '../context/LanguageToggleContext';
import LanguageToggleButton from '../modules/LanguageToggle/Button';

const App = () => (
  <div data-testid="app" id="app">
    <LanguageToggleProvider>
      <LanguageToggleButton
        onClick={() => {}}
        icon="japan_flag.svg"
        lang="日本語"
      />
    </LanguageToggleProvider>
  </div>
)

export default App;
