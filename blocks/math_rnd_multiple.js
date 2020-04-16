'use strict';

//goog.provide('Blockly.JavaScript.Test');

goog.require('Blockly.JavaScript');

// --- math_rnd_multiple --------------------------------------------------
Blockly.Words['math_rnd_multiple_round']               = {'en': 'Round',                    'de': 'Runde'};
Blockly.Words['math_rnd_multiple_roundup']             = {'en': 'Round Up',                 'de': 'Runde auf'};
Blockly.Words['math_rnd_multiple_rounddown']           = {'en': 'Round Down',               'de': 'Runde ab'};
Blockly.Words['math_rnd_multiple_multiple_of']         = {'en': 'to multiple of',           'de': 'zu Vielfaches von'};
Blockly.Words['math_rnd_multiple_amount_related']      = {'en': '. Amount related',         'de': '. Betragsmäßig'};

Blockly.Test.blocks['math_rnd_multiple'] =
    '<block type="math_rnd_multiple">'
    +'  <field name="DIRECTION">ROUND</field>'
    +'  <field name="IGNORESIGN">FALSE</field>'
    +'  <value name="NUMBER">'
    +'    <shadow type="math_number">'
    +'      <field name="NUM">12.268</field>'
    +'    </shadow>'
    +'  </value>'
    +'  <value name="MULTIPLE">'
    +'    <shadow type="math_number">'
    +'      <field name="NUM">0.5</field>'
    +'    </shadow>'
    +'  </value>'
    +'</block>';

Blockly.Blocks['math_rnd_multiple'] = {
  init: function() {
    this.appendValueInput('NUMBER')
        .setCheck('Number')
        .appendField(new Blockly.FieldDropdown([
                [Blockly.Words['math_rnd_multiple_round'][systemLang],"ROUND"],
                [Blockly.Words['math_rnd_multiple_roundup'][systemLang],"ROUNDUP"],
                [Blockly.Words['math_rnd_multiple_rounddown'][systemLang],"ROUNDDOWN"]
        ]), "DIRECTION");
      //  .appendShadowBlock('math_number', {NUM: 3.1415} );
    this.appendValueInput('MULTIPLE')
        .setCheck('Number')
        .appendField(Blockly.Words['math_rnd_multiple_multiple_of'][systemLang]);
    //    .appendShadowBlock('math_number', {NUM: 0.01} );
    this.appendDummyInput()
        .appendField(Blockly.Words['math_rnd_multiple_amount_related'][systemLang])
        .appendField(new Blockly.FieldCheckbox("FALSE"), "IGNORESIGN");

    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(Blockly.Constants.Math.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
    this.initSvg();
  }
}

Blockly.JavaScript['math_rnd_multiple'] = function(block) {
// round a number to multiple

  let number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
  let multiple = Blockly.JavaScript.valueToCode(block, 'MULTIPLE', Blockly.JavaScript.ORDER_ATOMIC);
  let directionText = block.getFieldValue('DIRECTION');
  let ignoreSign = block.getFieldValue('IGNORESIGN') == 'TRUE';

  let functionName = Blockly.JavaScript.provideFunction_(
    "RoundMultible",
    [ "function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "( number, multiple,",
      "                        direction = 0,",
      "                        ignoreSign = false ) {",
      "// round a number to multiple",
      "  ",
      "  if (ignoreSign && number < 0) direction = -direction;",
      "  ",
      "  // convert multiple in fraction to avoid IEEE754 calculation error",
      "  let numerator = 1 / (multiple % 1 || 1);",
      "  let denominator = multiple * numerator;",
      "  ",
      "  number = number * numerator / denominator;",
      "  number = direction < 0 ? Math.floor(number) * denominator / numerator :",
      "           direction > 0 ? Math.ceil(number) * denominator / numerator :",
      "                           Math.round(number) * denominator / numerator;",
      "  return +number.toFixed(14);",
      "}"
    ]
  );
  ignoreSign = ignoreSign ? ', true' : '';
  let direction = directionText == 'ROUNDDOWN' ? ', -1' :
                  directionText == 'ROUNDUP'   ? ', 1' :
                  ignoreSign != ''             ? ', 0' :
                                                 '';
  let code = functionName + '(' + number + ', '
              + multiple + direction + ignoreSign + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}
