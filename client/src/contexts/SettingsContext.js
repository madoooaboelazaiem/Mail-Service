import React, { createContext, useEffect, useState } from 'react';

const defaultSettings = {
  theme: 'light',
};

const SettingsContext = createContext({ settings: defaultSettings });

const loadSettings = () => {
  try {
    const settings = JSON.parse(window.localStorage.getItem('settings'));

    return settings;
  } catch (err) {
    console.error(err);

    return defaultSettings;
  }
};

export const SettingsProvider = props => {
  const { children } = props;

  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const settings = loadSettings();

    if (settings) {
      setSettings(settings);
    }
  }, []);

  const saveSettings = newSettings => {
    // update the state
    setSettings(newSettings);

    // update the local storage
    localStorage.setItem('settings', JSON.stringify(settings));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
