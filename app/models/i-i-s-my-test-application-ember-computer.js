import { Model as ComputerMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-my-test-application-ember-computer';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ComputerMixin, {

});
defineProjections(Model);
export default Model;
