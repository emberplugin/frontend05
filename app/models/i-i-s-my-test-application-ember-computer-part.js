import { Model as ComputerPartMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-my-test-application-ember-computer-part';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ComputerPartMixin, {

});
defineProjections(Model);
export default Model;
