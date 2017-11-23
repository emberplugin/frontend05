import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-my-test-application-ember-computer-l');
  this.route('i-i-s-my-test-application-ember-computer-e',
  { path: 'i-i-s-my-test-application-ember-computer-e/:id' });
  this.route('i-i-s-my-test-application-ember-computer-e.new',
  { path: 'i-i-s-my-test-application-ember-computer-e/new' });
  this.route('i-i-s-my-test-application-ember-type-l');
  this.route('i-i-s-my-test-application-ember-type-e',
  { path: 'i-i-s-my-test-application-ember-type-e/:id' });
  this.route('i-i-s-my-test-application-ember-type-e.new',
  { path: 'i-i-s-my-test-application-ember-type-e/new' });
});

export default Router;
