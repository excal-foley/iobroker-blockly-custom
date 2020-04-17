'use strict';

// --- math_minus --------------------------------------------------
Blockly.Test.blocks['math_minus'] =
    '  <block type="math_minus">'
    +'  </block>';

Blockly.Blocks['math_minus'] = {
  init: function() {
    this.appendValueInput('NUMBER')
        .setCheck('Number')
        .appendField('\u2212');
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Math.HUE);
 this.setTooltip('');
 this.setHelpUrl('');
  }
}

Blockly.JavaScript['math_minus'] = function(block) {
  // Invert number
  var number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_UNARY_NEGATION) || '0';
  var code = '-' + number;
  return [code, order];
}
