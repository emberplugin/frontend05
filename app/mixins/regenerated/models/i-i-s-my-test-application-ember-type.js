import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-my-test-application-ember-type', {
    name: Projection.attr('Name')
  });
  modelClass.defineProjection('TypeE', 'i-i-s-my-test-application-ember-type', {
    name: Projection.attr('Name')
  });
  modelClass.defineProjection('TypeL', 'i-i-s-my-test-application-ember-type', {
    name: Projection.attr('Name'),
    createTime: Projection.attr('Создание'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Редактирование'),
    editor: Projection.attr('Редактор')
  });
};
