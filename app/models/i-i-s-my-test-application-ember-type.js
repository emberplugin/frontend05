import { Model as TypeMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-my-test-application-ember-type';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, TypeMixin, {

});
defineProjections(Model);
export default Model;
