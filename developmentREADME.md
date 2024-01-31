# Purpose 

This file tracks development decisions for the website. 

# Masking all goals except for goal 1, 8, 9. 

This is achieved by writing a custom JavaScript file, which is run after the 
webpage is rendered. The JavaScript file is stored under assets > js > custom.js.
Note that this is not a permanent fix. A more permanent fix requires direct 
modification of the original template html file that OpenSDG develops, and 
tell our website to inherent the modified website, instead of the original one.

The current `custom.js` essentially identifies all the elements to be removed,
and then remove them. Nothing fancy here. 