import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  serialNumber: DS.attr('string'),
  manufactureDate: DS.attr('date'),
  type: DS.attr('i-i-s-my-test-application-ember-computer-type'),
  description: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  computerPart: DS.hasMany('i-i-s-my-test-application-ember-computer-part', { inverse: 'computer', async: false }),
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
  modelClass.defineProjection('AuditView', 'i-i-s-my-test-application-ember-computer', {
    serialNumber: Projection.attr('Serial number'),
    manufactureDate: Projection.attr('Manufacture date'),
    type: Projection.attr('Type'),
    description: Projection.attr('Description'),
    computerPart: Projection.hasMany('i-i-s-my-test-application-ember-computer-part', 'Computer part', {
      broken: Projection.attr('Broken'),
      serialNumber: Projection.attr('Serial number'),
      type: Projection.belongsTo('i-i-s-my-test-application-ember-type', 'Type', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  modelClass.defineProjection('ComputerE', 'i-i-s-my-test-application-ember-computer', {
    serialNumber: Projection.attr('Serial number'),
    manufactureDate: Projection.attr('Manufacture date'),
    type: Projection.attr('Type'),
    description: Projection.attr('Description'),
    computerPart: Projection.hasMany('i-i-s-my-test-application-ember-computer-part', 'Computer part', {
      broken: Projection.attr('Broken'),
      serialNumber: Projection.attr('Serial number'),
      type: Projection.belongsTo('i-i-s-my-test-application-ember-type', 'Type', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  modelClass.defineProjection('ComputerL', 'i-i-s-my-test-application-ember-computer', {
    serialNumber: Projection.attr('Serial number'),
    manufactureDate: Projection.attr('Manufacture date'),
    type: Projection.attr('Type'),
    description: Projection.attr('Description'),
    createTime: Projection.attr('Создание'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Редактирование'),
    editor: Projection.attr('Редактор')
  });
};
