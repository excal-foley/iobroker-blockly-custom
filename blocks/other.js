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


// --- system_code --------------------------------------------------
Blockly.Custom.blocks['system_code'] =
    '  <block type="system_code">'
    +'  </block>';

Blockly.Blocks['system_code'] = {
  init: function() {
    var InputPrefix = new Blockly.FieldTextInput('');
    InputPrefix.setSpellcheck(false);
    var InputSuffix = new Blockly.FieldTextInput('');
    InputSuffix.setSpellcheck(false);

    this.appendValueInput('INPUT')
        //.appendField('js')
        .appendField(InputPrefix, 'PREFIX');
    this.appendDummyInput()
        .appendField(InputSuffix, 'SUFFIX');

    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour('#FF0000');
    this.setTooltip('');
    this.setHelpUrl('');
    this.initSvg();
  }
}

Blockly.JavaScript['system_code'] = function(block) {
  var input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_NONE);
  var prefix = block.getFieldValue('PREFIX');
  var suffix = block.getFieldValue('SUFFIX');

  return [prefix + input + suffix, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

// --- system_code2 --------------------------------------------------
Blockly.Custom.blocks['system_code2'] =
    '  <block type="system_code2">'
    +'  </block>';

Blockly.Blocks['system_code2'] = {
  init: function() {
    var InputPrefix = new Blockly.FieldTextInput('');
    InputPrefix.setSpellcheck(false);
    var InputSuffix = new Blockly.FieldTextInput('');
    InputSuffix.setSpellcheck(false);

    this.appendValueInput('INPUT')
        //.appendField('js')
        .appendField(InputPrefix, 'PREFIX');
    this.appendDummyInput()
        .appendField(InputSuffix, 'SUFFIX');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour('#FF0000');
    this.setTooltip('');
    this.setHelpUrl('');
    this.initSvg();
  }
}

Blockly.JavaScript['system_code2'] = function(block) {
  var input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_NONE);
  var prefix = block.getFieldValue('PREFIX');
  var suffix = block.getFieldValue('SUFFIX');

  return prefix + input + suffix
}

// --- logic_ifEmpty --------------------------------------------------
Blockly.Words['logic_ifEmpty']                    = {'en': 'if empty',      'de': 'falls leer'  };
Blockly.Words['logic_ifEmpty_then']               = {'en': 'then',          'de': 'dann'        };

Blockly.Test.blocks['logic_ifEmpty'] =
    '  <block type="logic_ifEmpty">'
    +'  </block>';

Blockly.Blocks['logic_ifEmpty'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Words['logic_ifEmpty'][systemLang]);
    this.appendValueInput('DEFLT')
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Words['logic_ifEmpty_then'][systemLang]);

    this.setInputsInline(true);
    this.setColour(Blockly.Constants.Logic.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
    this.updateShape_();
    this.initSvg();
  },

  // crate a mutation for set the output and type-check
  checkOutput_: null,

  mutationToDom: function() {
    let container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('check_output', this.checkOutput_);
    return container;
  },

  domToMutation: function(xmlElement) {
    this.checkOutput_ = xmlElement.getAttribute('check_output').split(',');
    this.checkOutput_[0] === 'null' && (this.checkOutput_ = null);
    this.updateShape_();
  },

  updateShape_: function() {
    this.setOutput(true, this.checkOutput_);
  },

  onchange: function(event) {
    if(event.newParentId == this.id || event.oldParentId == this.id) {
      // get outputs of connected blocks and set as this output
      var inputValueBlock = event.oldInputName != 'VALUE' &&
                      this.getInput('VALUE').connection.targetBlock();
                      //this.getInputTargetBlock('VALUE');TO-DO
      var inputDefltBlock = event.oldInputName != 'DEFLT' &&
                      this.getInput('DEFLT').connection.targetBlock();

      var inputValueCheck = inputValueBlock ?
                      inputValueBlock.outputConnection.check_ : [];
      var inputDefltBlock = inputDefltBlock ?
                      inputDefltBlock.outputConnection.check_ : [];

      !inputValueCheck.length || !inputDefltBlock.length
          ? this.checkOutput_ = null
          : this.checkOutput_ = [...new Set([...inputValueCheck,
                                             ...inputDefltBlock])];

      this.updateShape_();
    }
  }
}

Blockly.JavaScript['logic_ifEmpty'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_LOGICAL_OR) || "''";
  var deflt = Blockly.JavaScript.valueToCode(block, 'DEFLT', Blockly.JavaScript.ORDER_LOGICAL_OR) || "''";
  var code = value + ' || ' + deflt;
  return [code, Blockly.JavaScript.ORDER_LOGICAL_OR];
}

/** ///###########################    system_getObjProperties    ###########################//
BOB_.registerBlock('system_getObjProperties');
Blockly.Blocks['system_getObjProperties'] = {
  init: function() {

    var validator = function(newValue) {
      // Whitelist Chars
      return newValue.replace(/[^\w\[\]\'\"\$\.]/g, '');
    }

    var prop = new Blockly.FieldTextInput('common.name');
        prop.setSpellcheck(false);
        prop.setValidator(validator);

    this.appendValueInput('OBJECT')
        .setCheck('String')
        .appendShadowBlock('field_oid');
    this.appendDummyInput()
        .appendField('.')
        .appendField(prop, 'PROP')

    this.setOutput(true, null);
    this.setColour(Blockly.Constants.System.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
    this.initSvg();
  }
}

Blockly.JavaScript['system_getObjProperties'] = function(block) {
  var prop = block.getFieldValue('PROP');
  var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getObject(' + object + ').' + prop;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

/** ///###########################    system_getObject    ###########################//
BOB_.registerBlock('system_getObject');
Blockly.Blocks['system_getObject'] = {
  init: function() {
    this.appendValueInput('OBJECT')
        .setCheck('String')
        .appendField('getObject')
        .appendShadowBlock('field_oid');

    this.setOutput(true, ['Array', 'Object']);
    this.setInputsInline(true);
    this.setColour(Blockly.Constants.System.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
    this.initSvg();
  }
}

Blockly.JavaScript['system_getObject'] = function(block) {
  var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return ['getObject(' + object + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

/** ///###########################    system_getStateValue    ###########################//
BOB_.registerBlock('system_getStateValue');

Blockly.Blocks['system_getStateValue'] = {
  init: function() {
    this.appendValueInput('OBJECT')
        .setCheck('String')
        .appendField(new Blockly.FieldTextInput('states'), 'ATTRIBUT')
        .appendField('von')
        .appendShadowBlock('field_oid');
    this.appendDummyInput()
        .appendField('umkerhren')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'INVERT');

    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(Blockly.Constants.System.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
    this.initSvg();
  }
}

Blockly.JavaScript['system_getStateValue'] = function(block) {
  var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  var attribut = block.getFieldValue('ATTRIBUT');
  var invert = block.getFieldValue('INVERT') === 'TRUE';
  var functionName = Blockly.JavaScript.provideFunction_(
    "getStateValue",
    ["function " + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + "(objectId, attribut, opt_invert = false) {",
     "  try {",
     "    return getObject(objectId).common[attribut][opt_invert ? !getState(objectId).val : getState(objectId).val];",
     "  } catch (err) {",
     "    console.error(",
     "      'getObject('+objectId+').common['+attribut+']['+opt_invert ? !getState(objectId).val : getState(objectId).val+']'",
     "      + ' does not exist!');",
     "  }",
     "}"
    ]
  );

  var code = functionName + "(" + object + ", '" + attribut + "', " + invert + ")";
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

/** ///###########################    system_getObjProperties2    ###########################//
//Blockly.testObj = {wert1: 1, wert2: 'Test', object1: {}, object2: {wert1: 2, wert2: 'Test5'}, func: function() {console.log('Loggin');}, array: [5,6,1,4,9,8]}
BOB_.registerBlock('system_getObjProperties2');
Blockly.Blocks['system_getObjProperties2'] = {
  init: function() {
    this.appendValueInput('OBJECT')
        .setCheck('String')
        .appendShadowBlock('field_oid');
    this.addPropertie(0);

    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(Blockly.Constants.System.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
    this.initSvg();
  },

  objName_: '',
  obj_: {},

  mutationToDom: function() {
    let container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('object_name', this.objName_);
    return container;
  },

  domToMutation: function(xmlElement) {
    this.objName_ = xmlElement.getAttribute('object_name');
    this.setObj();
  },

  onchange: function(event) {
    if (event.type === Blockly.Events.MOVE &&
        event.oldParentId === this.id && event.oldInputName === 'OBJECT') {
      this.obj_ = {};
      this.objName_ = '';
      this.removePropertie(0);
      this.addPropertie(0);
    } else if ( (event.type === Blockly.Events.MOVE &&
        event.newParentId === this.id &&
        event.newInputName === 'OBJECT') ||
        (event.type === Blockly.Events.CHANGE &&
         this.childBlocks_[0].id === event.blockId) ) {

        var inputBlock = this.getInput('OBJECT').connection.targetBlock();
        this.objName_ = inputBlock
            ? inputBlock.getFieldValue('oid') || inputBlock.getFieldValue('TEXT')
            : this.objName_;
        this.setObj();
    }
  },

  setObj: function() {
    if (typeof main !== 'undefined' && typeof main.objects !== 'undefined') {
      this.obj_ = main.objects[this.objName_];
    } else {
      this.obj_ = Blockly[this.objName_];
    }
    this.removePropertie(0);
    this.addPropertie(0);
  },

  validate: function(newValue) {
    var block = this.sourceBlock_;
    var nr = parseInt(this.name.match(/\d+$/));

    block.removePropertie(nr + 1);

    if (newValue !== 'DEFLT') {
      for (var option of this.getOptions()) {
        if (option[1] === newValue) {
          var newProp = option[0];
          break;
        }
      }
      block.addPropertie(nr+1, newProp);
    }
    return newValue;
  },

  removePropertie: function(nr) {
    for (var i = nr; this.getInput('DUMMY_' + i); i++)
        this.removeInput('DUMMY_' + i);
  },

  addPropertie: function(nr, lastProp = null) {
    var obj = this.obj_;

    for (var i = 0; i < nr; i++) {
      var prob = (i === nr-1 && lastProp) || this.getField('PROPERTIES_' + i).text_;
      obj = obj[prob];
    }

    if (Array.isArray(obj)) {
    // Array
      this.appendValueInput('DUMMY_' + nr)
          .setCheck('Number')
          .appendShadowBlock('math_number', {NUM: 0});

    } else if (typeof obj === 'function') {
    // Function
      this.appendDummyInput('DUMMY_' + nr)
          .appendField('()', 'PROPERTIES_' + nr);

    } else if (typeof obj === 'string' ||
               typeof obj === 'number') {
    // Value
      this.appendDummyInput('DUMMY_' + nr)
          .appendField('_Wert', 'PROPERTIES_' + nr);

    } else if (typeof obj === 'object' ||
               typeof obj === 'undefined') {
    // Object or Undefined
      this.appendDummyInput('DUMMY_' + nr)
          .appendField('.')
          .appendField(new Blockly.FieldDropdown(
              this.generateOptions(obj), this.validate
          ), 'PROPERTIES_' + nr);
    }
  },

  generateOptions: function(obj) {
    var options = [['_OBJEKT','DEFLT']];
    var i = 0;
    for(var prop in obj) {
      options.push([prop, 'opt'+i]);
      i++;
    }
    return options;
  }
}

Blockly.JavaScript['system_getObjProperties2'] = function(block) {
  var objName = block.objName_;

  var prop = [];
  for (var i = 0; block.getFieldValue('PROPERTIES_' + i); i++) {
    prop.push(block.getField('PROPERTIES_' + i).text_);
  }
  var lastProp = prop.pop();
  lastProp = lastProp === '()' ? '()' : '';

  var code = 'getObject(' + objName + ').' + prop.join('.') + lastProp;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}
/**/
