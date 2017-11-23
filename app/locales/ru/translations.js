import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'My ember',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'My ember',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'My ember',
          title: 'My ember'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'my-ember': {
          caption: 'MyEmber',
          title: 'MyEmber',
          'i-i-s-my-test-application-ember-type-l': {
            caption: 'Type',
            title: '',

          },
          'i-i-s-my-test-application-ember-computer-l': {
            caption: 'Computer',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-my-test-application-ember-computer-l': IISMyTestApplicationEmberComputerLForm,
    'i-i-s-my-test-application-ember-type-l': IISMyTestApplicationEmberTypeLForm,
    'i-i-s-my-test-application-ember-computer-e': IISMyTestApplicationEmberComputerEForm,
    'i-i-s-my-test-application-ember-type-e': IISMyTestApplicationEmberTypeEForm,
  },

});

export default translations;
