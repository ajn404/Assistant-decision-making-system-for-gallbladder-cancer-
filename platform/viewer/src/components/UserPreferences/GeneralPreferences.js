import React, { useState } from 'react';
import PropTypes from 'prop-types';

import i18n from '@ohif/i18n';

import { TabFooter, LanguageSwitcher, useSnackbarContext } from '@ohif/ui';
import { useTranslation } from 'react-i18next';

import './GeneralPreferences.styl';

function GeneralPreferences({ onClose }) {
  const { t } = useTranslation('UserPreferencesModal');
  const snackbar = useSnackbarContext();
  const currentLanguage = i18n.language;
  const { availableLanguages } = i18n;

  const [language, setLanguage] = useState(currentLanguage);

  const onResetPreferences = () => {
    setLanguage(i18n.defaultLanguage);
  };

  const onSave = () => {
    i18n.changeLanguage(language);

    onClose();

    snackbar.show({
      message: t('SaveMessage'),
      type: 'success',
    });
  };

  const hasErrors = false;

  return (
    <React.Fragment>
      <div className="GeneralPreferences">
        <div className="language">
          <label htmlFor="language-select" className="languageLabel">
            语言
          </label>
          <LanguageSwitcher
            language={language}
            onLanguageChange={setLanguage}
            languages={availableLanguages}
          />
        </div>
      </div>
      <TabFooter
        onResetPreferences={onResetPreferences}
        onSave={onSave}
        onCancel={onClose}
        hasErrors={hasErrors}
        t={t}
      />
    </React.Fragment>
  );
}

GeneralPreferences.propTypes = {
  onClose: PropTypes.func,
};

export { GeneralPreferences };
