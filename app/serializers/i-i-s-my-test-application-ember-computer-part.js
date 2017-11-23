import { Serializer as ComputerPartSerializer } from
  '../mixins/regenerated/serializers/i-i-s-my-test-application-ember-computer-part';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ComputerPartSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
