# Custom Blocks for ioBroker
Add custom blocks to ioBroker-Blockly

### An extract of blocks that are added:

**Multipel arithmetic&logic-blocks**

**Telegram Keybord generator**

**Gets the index of list loop**

**is value between this and that**

...and much more


### Note

This project is in an early alpha phase.

Since changes to the Blockly website in ioBroker are only applied after a restart, I have added the sandbox.
It is for testing newly created blocks. If there is a quick way to apply changes without restarting, then the sandbox can be removed.

### Requirement:

You need an ioBroker instance, with an install javascript-blockly adapter.

Optionally the Telgram adapter can be installed, too.


### Instructions for use:

1. This reposetory must copy to javascript.admin/google-blockly/custom
   default: /opt/iobroker/iobroker-data/files/javascript.admin/google-blockly/custom

2. Execute ./build.py
   build.py add all js-files from './', './blocks' and './blocks/msg' to javascript.admin/tab.html and Sandbox

3. Restart system to confirm settings


## Links

[ioBroker - Github page](https://github.com/ioBroker/ioBroker)

[ioBroker.javascript - Github page](https://github.com/ioBroker/ioBroker.javascript)

[ioBroker.telegram - Github page](https://github.com/iobroker-community-adapters/ioBroker.telegram)

[Google-Blockly - Github page](https://github.com/google/blockly)

[Google-Blockly - project page](https://developers.google.com/blockly/)
