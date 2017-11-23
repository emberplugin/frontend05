import { Serializer as TypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-my-test-application-ember-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
