import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMyTestApplicationEmberComputerLForm from './forms/i-i-s-my-test-application-ember-computer-l';
import IISMyTestApplicationEmberTypeLForm from './forms/i-i-s-my-test-application-ember-type-l';
import IISMyTestApplicationEmberComputerEForm from './forms/i-i-s-my-test-application-ember-computer-e';
import IISMyTestApplicationEmberTypeEForm from './forms/i-i-s-my-test-application-ember-type-e';
import IISMyTestApplicationEmberComputerPartModel from './models/i-i-s-my-test-application-ember-computer-part';
import IISMyTestApplicationEmberComputerModel from './models/i-i-s-my-test-application-ember-computer';
import IISMyTestApplicationEmberTypeModel from './models/i-i-s-my-test-application-ember-type';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-my-test-application-ember-computer-part': IISMyTestApplicationEmberComputerPartModel,
    'i-i-s-my-test-application-ember-computer': IISMyTestApplicationEmberComputerModel,
    'i-i-s-my-test-application-ember-type': IISMyTestApplicationEmberTypeModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'my-ember': {
          caption: 'my-ember',
          title: 'my-ember',
          'i-i-s-my-test-application-ember-type-l': {
            caption: 'i-i-s-my-test-application-ember-type-l',
            title: 'i-i-s-my-test-application-ember-type-l',

          },
          'i-i-s-my-test-application-ember-computer-l': {
            caption: 'i-i-s-my-test-application-ember-computer-l',
            title: 'i-i-s-my-test-application-ember-computer-l',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-my-test-application-ember-computer-l': IISMyTestApplicationEmberComputerLForm,
    'i-i-s-my-test-application-ember-type-l': IISMyTestApplicationEmberTypeLForm,
    'i-i-s-my-test-application-ember-computer-e': IISMyTestApplicationEmberComputerEForm,
    'i-i-s-my-test-application-ember-type-e': IISMyTestApplicationEmberTypeEForm,
  },

});

export default translations;
