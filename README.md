# Custom Blocks for ioBroker
Add custom blocks to ioBroker-Blockly

### Extract of blocks to be added

**Multiple arithmetic- and logic-blocks**
<br/><img src="examples/multiplex_arith.png" alt="" width="200"/>
<br/><img src="examples/multiplex_logic.png" alt="" width="200"/>

**Telegram keybord generator**
<br/><img src="examples/telegram_keyboard.png" alt="" width="200"/>
<br/><img src="examples/telegram_keyboard2.png" alt="" width="200"/>

**gets the index of list-loop**

**is value between this and that**
<br/><img src="examples/logic_between.png" alt="" width="200"/>

**if empty then**
<br/><img src="examples/logic_ifEmpty.png" alt="" width="200"/>

**Multiple property/function-block**

...and much more


### Note / Disclaimer

This project is in an early alpha phase.

The blocks could still contain bugs or be modified so that they are not downward compatible. For this reason they should not be transferred to a live/productive system.

Since changes to the Blockly website in ioBroker are only applied after a restart, I have added the sandbox. It is for testing newly created blocks. If there is a quick way to apply changes without restarting, then the sandbox can be removed.

### Requirement

You need an ioBroker instance, with an install javascript-blockly adapter.

The Telgram adapter is optional.


### Instructions for use

1. This reposetory must copy to javascript.admin/google-blockly/custom

   *default: /opt/iobroker/iobroker-data/files/javascript.admin/google-blockly/custom*

2. Execute ./build.py

   *this add all js-files from './', './blocks' and './blocks/msg' an merge it to javascript.admin/tab.html and Sandbox*

3. Restart system to confirm settings


## Links
[this project - Github page](https://github.com/excal-foley/iobroker-blockly-custom)

[ioBroker - Github page](https://github.com/ioBroker/ioBroker)

[ioBroker.javascript - Github page](https://github.com/ioBroker/ioBroker.javascript)

[ioBroker.telegram - Github page](https://github.com/iobroker-community-adapters/ioBroker.telegram)

[Google-Blockly - Github page](https://github.com/google/blockly)

[Google-Blockly - project page](https://developers.google.com/blockly/)
