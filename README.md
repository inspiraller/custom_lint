# README

# Pre-requisites
node, npm, gulp

# Environment variable path
C:\Users\steve\AppData\Roaming\npm

# Create directory for your project
$ cd c:\projects\

# Clone this repo
$ git clone git@bitbucket.org:[your username]/custom_lint.git

# install 
$ cd custom_lint
$ npm install

# Remove .git
rm -r c\:projects\custom_lint\.git

# Rename to your project
from:
c:\projects\custom_lint

to:
c:\project\myproject

# Test
$ gulp --production

# Conclusion
You should see errors reported in your console.

# For vscode ensure you have overwritten the htmlhint.js file which comes with that:
C:\Users\[your username]\.vscode\extensions\mkaufman.HTMLHint-0.3.3\server\node_modules\htmlhint\lib\htmlhint.js
Also ensure htmlhint is not installed globally.





