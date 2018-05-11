import { moduleForModel, test } from 'ember-qunit';

moduleForModel('chapter', 'Unit | Serializer | chapter', {
  // Specify the other units that are required for this test.
  needs: ['serializer:chapter']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
