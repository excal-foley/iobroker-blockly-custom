#!/usr/bin/env python3
# Hier beschreibung einfügen
import fileinput
import re
import glob, os

# defined html-file-path
html_name = 'tab.html'
html_dir = os.path.abspath('../../') # ../../ = javascript.admin
html_path = os.path.join(html_dir, html_name)

# html code
html_js_code = '<script type="text/javascript" src="%%%%"></script>'

# defined js-file-path
this_path = os.getcwd()
relative_js_path = os.path.relpath(this_path, html_dir)

# get all js-files and adds them as html-code to insert_code
insert_code = ''
for file in glob.glob('*.js'): #'**/*.js', recursive=True
    insert_code += html_js_code.replace('%%%%', os.path.join(relative_js_path, file))
    print(file)
for file in glob.glob('blocks/*.js'):
    insert_code += html_js_code.replace('%%%%', os.path.join(relative_js_path, file))
    print(file)
for file in glob.glob('blocks/msg/*.js'):
    insert_code += html_js_code.replace('%%%%', os.path.join(relative_js_path, file))
    print(file)

# create ".bak2" backup-file, if ".bak" already exist
if os.path.isfile(html_path+'.bak'):
    bak = '.bak2'
else:
    bak = '.bak'

# defined regex to replace html
code_marker_start = '<!--start custom blocks-->'
code_marker_end = '<!--end custom blocks-->'
#search_regex = '(?:(<\/script>)[\\n\\s]*(<style>))|(?:{}(.|\\n)*{})'.format(code_marker_start, code_marker_end)
search_regex = '(?:(<\/script>)(<style>))|(?:' + code_marker_start + '.*' + code_marker_end + ')'
replace_regex = r'\1{}{}{}\2'.format(code_marker_start, insert_code, code_marker_end)
#replace_regex = r'\1' + code_marker_start + insert_code + code_marker_end + r'\2'

# replace tab.html-file
with fileinput.FileInput(html_path, inplace=True, backup=bak) as file:
    for line in file:
        print(re.sub(search_regex, replace_regex, line, flags=re.M), end='')

# replace sandbox index.html-file
replace_regex_sanbox = re.sub('"google-blockly', '"../../../google-blockly', replace_regex, flags=re.M)
with fileinput.FileInput('sandbox/index.html', inplace=True) as file:
    for line in file:
        print(re.sub(search_regex, replace_regex_sanbox, line, flags=re.M), end='')

# system restart
#os.system('reboot now')
