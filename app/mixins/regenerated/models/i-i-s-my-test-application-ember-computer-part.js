import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  broken: DS.attr('boolean'),
  serialNumber: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  type: DS.belongsTo('i-i-s-my-test-application-ember-type', { inverse: null, async: false }),
  computer: DS.belongsTo('i-i-s-my-test-application-ember-computer', { inverse: 'computerPart', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      computer: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-i-s-my-test-application-ember-computer-part', {
    broken: Projection.attr('Broken'),
    serialNumber: Projection.attr('Serial number'),
    type: Projection.belongsTo('i-i-s-my-test-application-ember-type', 'Type', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  modelClass.defineProjection('ComputerPartE', 'i-i-s-my-test-application-ember-computer-part', {
    broken: Projection.attr('Broken'),
    serialNumber: Projection.attr('Serial number'),
    type: Projection.belongsTo('i-i-s-my-test-application-ember-type', 'Type', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
};
