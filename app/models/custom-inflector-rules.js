import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('computer', 'Computers');
inflector.irregular('part', 'Parts');
inflector.irregular('type', 'Types');

export default {};
