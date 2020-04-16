'use strict';

//goog.provide('Blockly.Blocks.texts');  // Deprecated
goog.provide('Blockly.Constants');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Multiplex = {};

var systemLang = 'de';//TO-DO Fehler

// --- define operators --------------------------------------------------
Blockly.Words['multiplex_operators_ADD']       = {'en': '+',          'de': '+'        };
Blockly.Words['multiplex_operators_SUBTR']     = {'en': '\u2212',     'de': '\u2212'   };
Blockly.Words['multiplex_operators_MULTI']     = {'en': '×',          'de': '×'        };
Blockly.Words['multiplex_operators_DIVI']      = {'en': '÷',          'de': '÷'        };
Blockly.Words['multiplex_operators_MOD']       = {'en': 'modulo',     'de': 'Rest'     };
Blockly.Words['multiplex_operators_POW']       = {'en': '^',          'de': '^'        };
Blockly.Words['multiplex_operators_ROOT']      = {'en': '√',          'de': '√'        };
Blockly.Words['multiplex_operators_LT']        = {'en': '<',          'de': '<'        };
Blockly.Words['multiplex_operators_LE']        = {'en': '≤',          'de': '≤'        };
Blockly.Words['multiplex_operators_GT']        = {'en': '>',          'de': '>'        };
Blockly.Words['multiplex_operators_GE']        = {'en': '≥',          'de': '≥'        };
Blockly.Words['multiplex_operators_EQUAL']     = {'en': '=',          'de': '='        };
Blockly.Words['multiplex_operators_NOTEQUAL']  = {'en': '≠',          'de': '≠'        };
Blockly.Words['multiplex_operators_STRICT']    = {'en': '≡',          'de': '≡'        };
Blockly.Words['multiplex_operators_NOTSTRICT'] = {'en': '≡\u0338',    'de': '≡\u0338'  };
Blockly.Words['multiplex_operators_AND']       = {'en': 'and',        'de': 'und'      };
Blockly.Words['multiplex_operators_OR']        = {'en': 'or',         'de': 'oder'     };
Blockly.Words['multiplex_operators_SET']       = {'en': '=',          'de': '='        };
Blockly.Words['multiplex_operators_SET_ADD']   = {'en': '+=',         'de': '+='       };
Blockly.Words['multiplex_operators_SET_SUBTR'] = {'en': '\u2212=',    'de': '\u2212='  };
Blockly.Words['multiplex_operators_SET_POW']   = {'en': '^=',         'de': '^='       };
Blockly.Words['multiplex_operators_SET_MULTI'] = {'en': '×=',         'de': '×='       };
Blockly.Words['multiplex_operators_SET_DIVI']  = {'en': '÷=',         'de': '÷='       };
Blockly.Words['multiplex_operators_SET_MOD']   = {'en': '%=',         'de': '%='       };
Blockly.Words['multiplex_operators_SET_DEFLT'] = {'en': 'falls leer', 'de': 'if empty' };
Blockly.Words['multiplex_operators_DOT']       = {'en': '.',          'de': '.'        };
Blockly.Words['multiplex_operators_SQUARE']    = {'en': '[ ]',        'de': '[ ]'      };
Blockly.Words['multiplex_operators_ROUND']     = {'en': '( )',        'de': '( )'      };


Blockly.Constants.Operators = {
  dropdownById: function(...ids) {
  	let list = [];
      ids.forEach( id => {
      	if (this[id]) list.push(this[id].dropdown);
      });
      if (!list.length || !ids.length) return 'error';
  	return list
  },
  dropdownByType: function(type) {
  	if (!type) return 'error';
    return Object.values(this).filter(op => op.type == type).map(op => op.dropdown)
  },
  add: function(id, sign, type, code, order, validator) {
    this[id] = {
      id: id,
      name: Blockly.Words['multiplex_operators_'+id],
      sign: sign,
      type: type,
      code: code,
      order: order,
      validator: validator,
      get dropdown() { return [this.name[systemLang], this.id] }
    }
  }
}

//Blockly.Constants.Operators.add( 'id',        'sign',    'type',  'code',          order,                                   Validator                       ),
Blockly.Constants.Operators.add( 'NEGATIV',   '\u2212',  '',      '-${2}',               Blockly.JavaScript.ORDER_UNARY_NEGATION, ''                              ),
Blockly.Constants.Operators.add( 'NOT',       '\u2757',  '',      '!${2}',               Blockly.JavaScript.ORDER_LOGICAL_NOT,    ''                              ),
Blockly.Constants.Operators.add( 'ADD',       '+',       'arith', '${5} + ${6}',         Blockly.JavaScript.ORDER_ADDITION,       ['Number', 'Boolean', 'String']           ),
Blockly.Constants.Operators.add( 'SUBTR',     '\u2212',  'arith', '${5} - ${6}',         Blockly.JavaScript.ORDER_SUBTRACTION,    ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'MULTI',     '×',       'arith', '${5} * ${6}',         Blockly.JavaScript.ORDER_MULTIPLICATION, ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'DIVI',      '÷',       'arith', '${5} / ${6}',         Blockly.JavaScript.ORDER_DIVISION,       ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'MOD',       '%',       'arith', '${5} % ${6}',         Blockly.JavaScript.ORDER_MODULUS,        ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'POW',       '^',       'arith', '${5}**${6}',          Blockly.JavaScript.ORDER_EXPONENTIATION, ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'ROOT',      '√',       'arith', '(${6})**(1/${3})',    Blockly.JavaScript.ORDER_EXPONENTIATION, ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'LT',        '<',       'comp',  '${5} < ${6}',         Blockly.JavaScript.ORDER_RELATIONAL,     ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'LE',        '≤',       'comp',  '${5} <= ${6}',        Blockly.JavaScript.ORDER_RELATIONAL,     ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'GT',        '>',       'comp',  '${5} > ${6}',         Blockly.JavaScript.ORDER_RELATIONAL,     ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'GE',        '≥',       'comp',  '${5} >= ${6}',        Blockly.JavaScript.ORDER_RELATIONAL,     ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'EQUAL',     '=',       'comp',  '${5} == ${6}',        Blockly.JavaScript.ORDER_EQUALITY,       ''                              ),
Blockly.Constants.Operators.add( 'NOTEQUAL',  '≠',       'comp',  '${5} != ${6}',        Blockly.JavaScript.ORDER_EQUALITY,       ''                              ),
Blockly.Constants.Operators.add( 'STRICT',    '≡',       'comp',  '${5} === ${6}',       Blockly.JavaScript.ORDER_EQUALITY,       ''                              ),
Blockly.Constants.Operators.add( 'NOTSTRICT', '≡\u0338', 'comp',  '${5} !== ${6}',       Blockly.JavaScript.ORDER_EQUALITY,       ''                              ),
Blockly.Constants.Operators.add( 'AND',       '&&',      'logic', '${5} && ${6}',        Blockly.JavaScript.ORDER_LOGICAL_AND,    ''                              ),
Blockly.Constants.Operators.add( 'OR',        '||',      'logic', '${5} || ${6}',        Blockly.JavaScript.ORDER_LOGICAL_OR,     ''                              ),
Blockly.Constants.Operators.add( 'SET',       '=',       'assig', '${5} = ${6}',         Blockly.JavaScript.ORDER_ASSIGNMENT,     null                            ),
Blockly.Constants.Operators.add( 'SET_ADD',   '+=',      'assig', '${5} += ${6}',        Blockly.JavaScript.ORDER_ASSIGNMENT,     ['Number', 'Boolean', 'String'] ),
Blockly.Constants.Operators.add( 'SET_SUBTR', '\u2212=', 'assig', '${5} -= ${6}',        Blockly.JavaScript.ORDER_ASSIGNMENT,     ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'SET_POW',   '^=',      'assig', '${5} **= ${6}',       Blockly.JavaScript.ORDER_ASSIGNMENT,     ['Number']                      ),
Blockly.Constants.Operators.add( 'SET_MULTI', '×=',      'assig', '${5} *= ${6}',        Blockly.JavaScript.ORDER_ASSIGNMENT,     ['Number', 'Boolean']           ),
Blockly.Constants.Operators.add( 'SET_DIVI',  '÷=',      'assig', '${5} /= ${6}',        Blockly.JavaScript.ORDER_ASSIGNMENT,     ['Number']                      ),
Blockly.Constants.Operators.add( 'SET_MOD',   '%=',      'assig', '${5} %= ${6}',        Blockly.JavaScript.ORDER_ASSIGNMENT,     ['Number']                      ),
Blockly.Constants.Operators.add( 'SET_DEFLT', '||=',     'assig', '${5} = ${5} || ${6}', Blockly.JavaScript.ORDER_LOGICAL_OR,     null                            ),

Blockly.Constants.Operators.add( 'DOT',       '.',       '',      '${5}.${6}',           Blockly.JavaScript.ORDER_MEMBER,         /[\W]*/                         ),
Blockly.Constants.Operators.add( 'SQUARE',    '[ ]',     '',      '${5}[${4}]',          Blockly.JavaScript.ORDER_MEMBER,         ['String', 'Number', 'Boolean'] ),
Blockly.Constants.Operators.add( 'ROUND',     '( )',     '',      '${5}(${4})',          Blockly.JavaScript.ORDER_FUNCTION_CALL,  ''                              ),



Blockly.Constants.checkInputDeflt = [ [null, '0'], ['Number', '0'], ['Boolean', 'false'], ['String', "''"], ['Array', '[]'], ['Colour', '#000000'] ];

Blockly.Multiplex.BLOCK = function(container, items) {
  return {
    init: function() {
      let input = this.appendValueInput('FIX_INPUT0')
                      .setAlign(Blockly.ALIGN_RIGHT)
                      .setCheck('String', 'Number', 'Boolean');

      input.codeMap = [ ['INPUT', 'FIX_INPUT0'] ];

      this.setInputsInline(true);
      this.setOutput(true, 'Boolean');
      this.setColour(230);
      this.setTooltip('');
      this.setHelpUrl('');

      // Configure the mutator UI.
      this.updateShape_()
      this.setMutator(new Blockly.Mutator(items));
    },

    elements_: items,

    /**
     * Create XML to represent number of text inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
      let container = Blockly.utils.xml.createElement('mutation');
      container.setAttribute('elements', this.elements_.join(','));
      return container;
    },
    /**
     * Parse XML to restore the text inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
      this.elements_ = xmlElement.getAttribute('elements').split(',');
      if (this.elements_ == "" && this.elements_.length == 1) this.elements_ = [];
      this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
      let containerBlock = workspace.newBlock(container);
      containerBlock.initSvg();
      let connection = containerBlock.getInput('STACK').connection;
      for (let itemName of this.elements_) {
        var itemBlock = workspace.newBlock(itemName);
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);
        connection = itemBlock.nextConnection;
      }
      return containerBlock;
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function(containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK');
      if (!itemBlock) return;
      //itemBlock.valueConnection_ = [];
      let i = 0;
      while (itemBlock) {
        for (let itemInput of itemBlock.inputList) {
          var input = this.inputList.filter(input => 'itemNr' in input)[i];
          itemInput.valueConnection_ = input && input.connection
                                        && input.connection.targetConnection;
          itemInput.fieldPara_ = {};
          input.fieldRow.forEach((field) => {
            if (field.name) {
              var fieldName = field.name.replace(/(?<=\D)\d+$/, '');
              itemInput.fieldPara_[fieldName] = field.getValue();
            }
          });
        }
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
        i++;
      }
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock('STACK');
      // Count number of inputs.
      let connections = [], fieldsPara = [];
      this.elements_ = [];
      while (itemBlock) {
        this.elements_.push(itemBlock.type);
        for (let itemInput of itemBlock.inputList) {
          connections.push(itemInput.valueConnection_);
          fieldsPara.push(itemInput.fieldPara_);
        }
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
      // Disconnect any children that don't belong.
      for (let input of this.inputList.filter(input => 'itemNr' in input)) {
        var connection = input.connection && input.connection.targetConnection;
        if (connection && connections.indexOf(connection) == -1) {
          connection.disconnect();
        }
      }/**/
      this.updateShape_();
      // Reconnect any child blocks.
      for (let i = 0; i < this.inputList.length; i++) {
        Blockly.Mutator.reconnect(connections[i], this, 'INPUT' + i);

        for (let fieldName in fieldsPara[i]) {
          if (this.getField(fieldName + i))
                this.getField(fieldName + i).setValue(fieldsPara[i][fieldName]);
        }
      }
      this.initSvg();
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function() {
      // Remove all inputs.
      let input;
      while (input = this.inputList.filter(input => 'itemNr' in input)[0]) {
        this.removeInput(input.name);
      }
      // Add all inputs.
      for (let i in this.elements_) {
        var item = Blockly.Blocks[ this.elements_[i] ];
        item.setElements(this, +i);
      }
    }
  }
}

Blockly.Multiplex.CONTAINER = function(container) {
  this.init = function() {
    this.appendDummyInput()
        .appendField(container.title);
    this.appendStatementInput('STACK')
        .setCheck(container.NextStatement);

    this.contextMenu = false;
    this.setInputsInline(true);
    this.setColour(container.colour || 0);
    this.setTooltip(container.tooltip || '');
  }
}

/**
 * [description]
 * @param  {string} newValue        [description]
 * @this   {Blockly.FieldDropdown}
 * @return {string}                 newValue without changes
 */
Blockly.Multiplex.DROPDOWN_VALIDATOR = function(newValue) {
  let block = this.sourceBlock_;
  if (block) {
      let input = block.getInput('INPUT0');
    let oldValue = this.getValue();
    if (oldValue != newValue && block.mutator.isVisible())
          block.mutator.setVisible(false);
    //let input = this.getParentInput();
    let itemNr = input.itemNr;
    let newElement = 'multiplex_' + newValue;
    block.elements_[itemNr] = newElement;
    let check = Blockly.Constants.Operators[newValue].validator || null;
    input.setCheck(check);
  }
  return newValue;
}

/**
 * [description]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
Blockly.Multiplex.ITEM = function(obj) {
  this.init = new Blockly.Multiplex.ITEM_BLOCK(obj.block);
  this.setElements = new Blockly.Multiplex.ITEM_SETELEMENTS(obj.element);
}

Blockly.Multiplex.ITEM_BLOCK = function(obj) {
  return function() {
    this.appendDummyInput()
        .appendField(obj.title || 'ERROR');
    for (let i = 2; i == (obj.inputCount || 1); i++) this.appendDummyInput();

    this.contextMenu = false;
    this.setPreviousStatement(true, obj.PreviousStatement || null);
    this.setNextStatement(true, obj.NextStatement || null);
    this.setColour(obj.colour || 0);
    this.setTooltip(obj.tooltip || '');
  }
}

Blockly.Multiplex.ITEM_SETELEMENTS = function(obj) {
  return function(block, itemNr, setShadow = false) {
    //let n = block.inputList.length - 1;
    let n = itemNr;
    let input = block.appendValueInput('INPUT' + n)
                     .setAlign(Blockly.ALIGN_RIGHT)
                     .setCheck(obj.setCheck);

    let validator = Blockly.Multiplex.DROPDOWN_VALIDATOR;
    let selector = new Blockly.FieldDropdown(obj.dropdown, validator);
    if (obj.operator) selector.setValue(obj.operator);

    if (n > -1) input.appendField(selector, 'OPERATOR' + n);

    input.itemNr = itemNr;
    input.codeMap = (n > -1) ? [ ['FIELD_OPERATOR', 'OPERATOR' + n] ] : [];
    input.codeMap.push(['INPUT', 'INPUT' + n]);
  }
}

Blockly.Multiplex.JAVASCRIPT = function(block) {
  // Bitet verschiedene Rechenoperationen an
  let code = new Blockly.Multiplex.codeGenerator(block);
  for (let input of block.inputList) code.addLinks(input.codeMap);
  return code.getCode()
}

// --- multiplex_logic --------------------------------------------------
Blockly.Blocks['multiplex_logic_container'] =
     new Blockly.Multiplex.CONTAINER({
       title: 'Logik Operatoren:',
       NextStatement: 'first', //alias: setCheck
       colour: 210,
       tooltip: ''
     });

Blockly.Multiplex.Logic_Item = function(title, operator) {
  return new Blockly.Multiplex.ITEM({
    block: {
      title: title,
      PreviousStatement: null,
      NextStatement: null,
      colour: 230,
      tooltip: '',
      inputCount: 1
    },
    element: {
      operator: operator,
      setCheck: '',
      dropdown: Blockly.Constants.Operators.dropdownByType('logic')
    }
  });
}


Blockly.Blocks['multiplex_AND'] = Blockly.Multiplex.Logic_Item('UND', 'AND');
Blockly.Blocks['multiplex_OR'] = Blockly.Multiplex.Logic_Item('ODER', 'OR');

console.log(Blockly.Blocks['multiplex_AND']);

Blockly.Blocks['multiplex_logic'] = new Blockly.Multiplex.BLOCK(
                                              'multiplex_logic_container',
                                              [ 'multiplex_AND',
                                                'multiplex_OR'  ]);

Blockly.JavaScript['multiplex_logic'] = Blockly.Multiplex.JAVASCRIPT;

Blockly.Test.blocks['multiplex_logic'] =
    '<block type="multiplex_logic">'
    +'  <mutation elements="multiplex_AND"></mutation>'
    +'  <field name="OPERATOR0">AND</field>'
    +'</block>'

// --- multiplex_arith --------------------------------------------------
Blockly.Blocks['multiplex_arith_container'] =
     new Blockly.Multiplex.CONTAINER({
       title: 'Arithmetische Operatoren:',
       NextStatement: 'first', //alias: setCheck
       colour: 200,
       tooltip: ''
     });

Blockly.Multiplex.Arith_Item = function(title, operator) {
  return new Blockly.Multiplex.ITEM({
    block: {
      title: title,
      PreviousStatement: null,
      NextStatement: null,
      colour: 200,
      tooltip: '',
      inputCount: 1
    },
    element: {
      operator: operator,
      setCheck: '',
      dropdown: Blockly.Constants.Operators.dropdownByType('arith')
    }
  });
}

Blockly.Blocks['multiplex_ADD'] = Blockly.Multiplex.Arith_Item('PLUS', 'ADD');
Blockly.Blocks['multiplex_SUBTR'] = Blockly.Multiplex.Arith_Item('MINUS', 'SUBTR');
Blockly.Blocks['multiplex_MULTI'] = Blockly.Multiplex.Arith_Item('MAL', 'MULTI');
Blockly.Blocks['multiplex_DIVI'] = Blockly.Multiplex.Arith_Item('GETEILT', 'DIVI');
Blockly.Blocks['multiplex_MOD'] = Blockly.Multiplex.Arith_Item('REST', 'MOD');
Blockly.Blocks['multiplex_POW'] = Blockly.Multiplex.Arith_Item('HOCH', 'POW');
Blockly.Blocks['multiplex_ROOT'] = Blockly.Multiplex.Arith_Item('WURZEL', 'ROOT');

Blockly.Blocks['multiplex_arith'] = new Blockly.Multiplex.BLOCK(
                                              'multiplex_arith_container',
                                              [ 'multiplex_ADD',
                                                'multiplex_SUBTR',
                                                'multiplex_MULTI',
                                                'multiplex_DIVI',
                                                'multiplex_MOD',
                                                'multiplex_POW',
                                                'multiplex_ROOT'  ]);

Blockly.JavaScript['multiplex_arith'] = Blockly.Multiplex.JAVASCRIPT;

Blockly.Test.blocks['multiplex_arith'] =
    '<block type="multiplex_arith">'
    +'  <mutation elements="multiplex_ADD"></mutation>'
    +'  <field name="OPERATOR0">ADD</field>'
    +'</block>';

// --- math_set_operators --------------------------------------------------
Blockly.Test.blocks['math_set_operators'] =
    '  <block type="math_set_operators">'
    +'  </block>';

Blockly.Blocks['math_set_operators'] = {
  init: function() {
    //Validator for input-change
    let setInput = function(operator) {
      var input = this.getSourceBlock().getInput('value');
      let check = Blockly.Constants.Operators[operator] ?
                  Blockly.Constants.Operators[operator].validator : null;
      input.setCheck(check);
    }

    let operator_select = new Blockly.FieldDropdown(
              Blockly.Constants.Operators.dropdownByType('assig'), setInput)

    this.appendValueInput('value')
        .appendField(new Blockly.FieldVariable('Variable'), 'variable')
        .appendField(operator_select, 'operator');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Variables.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
    this.initSvg();
  }
}

Blockly.JavaScript['math_set_operators'] = function(block) {
// Nutzt für Variablen einen Zuweisungsoperator
  let code = new Blockly.Multiplex.codeGenerator(block);
  code.addLinks([ ['VARIABLE', 'variable'],
                  ['FIELD_OPERATOR', 'operator'],
                  ['INPUT', 'value']  ]);
  return code.getCode(false)
}

// --- codeGenerator JavaScript --------------------------------------------------
Blockly.Multiplex.codeGenerator  = function(block, arg = []) {
  this.links = [];
  this.maxOrder = 0;
  this.lastOrder = 99;
  this.addLinks = (arg) => arg.forEach(item => this.addLink(...item));

  this.addLink = function(type, name) {
    let code, order = 99;

    // getFieldValue if type = Field_* and remove 'Field_' from type
    let regField = /(?<=^FIELD_).+$/;
    if (regField.test(type)) {
      type = type.match(regField)[0];
      name = block.getFieldValue(name);
    }

    if (type == 'INPUT') {
      this.lastInput = name;
      return
    } else if (type == 'OPERATOR') {
      code = Blockly.Constants.Operators[name].code;
      order = Blockly.Constants.Operators[name].order;
    } else if (type == 'VARIABLE') {
      code = Blockly.JavaScript.variableDB_.getName(
              block.getFieldValue(name), Blockly.Variables.NAME_TYPE);
    } else if (!isNaN(type)) {
      code = name;
      order = type;
    }

    this.pushLastInput(order);
    this.links.push(code);
    this.lastOrder = order;
    this.lastInput = null;
    if (order > this.maxOrder) this.maxOrder = order;
  };

  // valueToCode if last link was input
  this.pushLastInput = function(order = 99, deflt) {
    if (this.lastInput) {
      let minOrder = Math.min(this.lastOrder, order);
      let inputCode = Blockly.JavaScript.valueToCode(block,
                                                      this.lastInput, minOrder);
      if (!deflt) {
        let inputChecks = block.getInput(this.lastInput).connection.check_ || [null];
        for (let check of Blockly.Constants.checkInputDeflt) {
          if (inputChecks.includes(check[0])) { deflt = check[1]; break }
        }
      }

      this.links.push(inputCode || ''+deflt);
      this.lastInput = null;
    }
  };

  this.addLinks(arg);
  /**
   * @param  {Boolean} [withOrder=true] [description]
   * @param  {...[string, string]} type+name    type = ['Field_']+('INPUT', 'OPERATOR', 'VARIABLE')
   *                                  name = name of field or code
   * @return {string}                 Generated code
   */
  this.getCode = function(withOrder = true, ...arg) {
    this.addLinks(arg);
    this.pushLastInput();

    // replace code with code in direction 'way'
    // if n == odd then way = +1 -> left to right
    // if n == even then way = -1 -> right to left
    // define search-regex for parameter replace ${num}
    let paramset = (num) => param = new RegExp(`(?<=^|[^\\\\])(\\$\\{${num}\\})`, 'g');
    let links = this.links, n = 0, way, param;
    while (links.length > 1 && n <= 99) {
      for (let i = -links.length; i <= links.length; i++) {
        if (i == 0) continue;
        var pos = links.length - Math.abs(i);
        if (way != -Math.sign(i)) {
          way = -Math.sign(i);
          links[pos] = links[pos].replace(paramset(++n), '');
        }
        if ( param.test(links[pos + way]) ) {
          links[pos] = links[pos + way].replace(param, links[pos]);
          links.splice(pos + way, 1);
          i--;
        }
      }
    }
    if (links.length > 1) console.error('In Block "' + block.type + '" can\'t generate Javacode!');
    links = links[0].replace('\\${', '${');
    return withOrder ? [links, this.maxOrder] : links
  };
}
/**/


// --- multiplex_property --------------------------------------------------
Blockly.Blocks['multiplex_property_container'] =
     new Blockly.Multiplex.CONTAINER({
       title: 'Eigenschafts Operatoren:',
       NextStatement: 'first', //alias: setCheck
       colour: 110,
       tooltip: ''
     });

Blockly.Multiplex.Property_Item = function(title, operator) {
  return new Blockly.Multiplex.ITEM({
    block: {
      title: title,
      PreviousStatement: null,
      NextStatement: null,
      colour: 130,
      tooltip: '',
      inputCount: 1
    },
    element: {
      operator: operator,
      setCheck: '',
      dropdown: Blockly.Constants.Operators.dropdownById('DOT','SQUARE','ROUND')
    }
  });
}

Blockly.Blocks['multiplex_DOT'] = Blockly.Multiplex.Property_Item('.ABCDEF.', 'DOT');
Blockly.Blocks['multiplex_SQUARE'] = Blockly.Multiplex.Property_Item('[.....]', 'SQUARE');
Blockly.Blocks['multiplex_ROUND'] = Blockly.Multiplex.Property_Item('(.....)', 'ROUND');

Blockly.Blocks['multiplex_property'] = new Blockly.Multiplex.BLOCK(
                                              'multiplex_property_container',
                                              [ 'multiplex_DOT',
                                                'multiplex_SQUARE',
                                                'multiplex_ROUND'  ]);

Blockly.JavaScript['multiplex_property'] = Blockly.Multiplex.JAVASCRIPT;

Blockly.Test.blocks['multiplex_property'] =
    '<block type="multiplex_property">'
  //  +'  <mutation elements="multiplex_AND"></mutation>'
  //  +'  <field name="OPERATOR0">AND</field>'
    +'</block>'
