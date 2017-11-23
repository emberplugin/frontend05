import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-my-test-application-ember-computer-part', 'Unit | Serializer | i-i-s-my-test-application-ember-computer-part', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-my-test-application-ember-computer-part',
    'transform:file',
    'transform:decimal',

    'transform:i-i-s-my-test-application-ember-computer-type',

    'model:i-i-s-my-test-application-ember-computer-part',
    'model:i-i-s-my-test-application-ember-computer',
    'model:i-i-s-my-test-application-ember-type'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
