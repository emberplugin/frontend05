import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-my-test-application-ember-computer', 'Unit | Model | i-i-s-my-test-application-ember-computer', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-my-test-application-ember-computer-part',
    'model:i-i-s-my-test-application-ember-computer',
    'model:i-i-s-my-test-application-ember-type'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
