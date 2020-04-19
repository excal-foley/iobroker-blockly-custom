# Custom Blocks for ioBroker
Add custom blocks to ioBroker-Blockly

### Extract of blocks to be added

**> Multiple arithmetic- and logic-blocks <**<br/>
<img src="examples/multiplex_arith.png" alt="" width="400"/><br/>
<img src="examples/multiplex_logic.png" alt="" width="400"/>

**> Telegram keybord generator <**<br/>
<img src="examples/telegram_keyboard.png" alt="" width="400"/>
<img src="examples/telegram_keyboard2.png" alt="" width="200"/>

**> is value between this and that <**<br/>
<img src="examples/logic_between.png" alt="" width="200"/>

**> if empty then <**<br/>
<img src="examples/logic_ifEmpty.png" alt="" width="400"/>

<br/>

**> gets the index of list-loop <**

<br/>

**> Multiple property/function-block <**

<br/>

...and much more

<br/>

### Note / Disclaimer

This project is in an early alpha phase.

The blocks could still contain bugs or be modified so that they are not downward compatible. For this reason they should'nt be transferred to a live/productive system.

Currently the project is only translated into English and German

Since changes to the Blockly website in ioBroker are only applied after a restart, I have added the sandbox. It is for testing newly created blocks. If there is a quick way to apply changes without restarting, then the sandbox can be removed.

This is my first project on Github and i hope i can give and get help.

### Requirement

You need an ioBroker instance, with an install javascript-blockly adapter.

The Telgram adapter is optional.


### Instructions for use

I don't know how to create an automatic install package, therefore the repository must be copied and executed manually.

1. This reposetory must copy to javascript.admin/google-blockly/custom

   *default: /opt/iobroker/iobroker-data/files/javascript.admin/google-blockly/custom*

2. Execute ./build.py

   *this take all js-file-path from './', './blocks' and './blocks/msg' and links it to javascript.admin/tab.html and Sandbox*

3. Restart system to confirm settings


## Links
[this project - Github page](https://github.com/excal-foley/iobroker-blockly-custom)

[ioBroker - Github page](https://github.com/ioBroker/ioBroker)

[ioBroker.javascript - Github page](https://github.com/ioBroker/ioBroker.javascript)

[ioBroker.telegram - Github page](https://github.com/iobroker-community-adapters/ioBroker.telegram)

[Google-Blockly - Github page](https://github.com/google/blockly)

[Google-Blockly - project page](https://developers.google.com/blockly/)
