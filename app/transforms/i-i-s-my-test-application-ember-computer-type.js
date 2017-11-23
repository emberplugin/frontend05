import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ComputerTypeEnum from '../enums/i-i-s-my-test-application-ember-computer-type';

export default FlexberryEnum.extend({
  enum: ComputerTypeEnum,
  sourceType: 'IIS.MyTestApplicationEmber.ComputerType'
});
