# DBM-Mods-Loader
A mod loader for Discord Bot Maker to make using mods easier.


Download or clone the repository's zip file.

Extract the files into a folder somewhere.

Go into the dbmmods folder and run `npm install`

     git clone https://github.com/generalwrex/DBM-Mods-Loader.git
     cd DBM-Mods-Loader-master/actions/dbmmods
     npm install

Now we want to copy `dbmmods_loader.js` and the `dbmmods` folder into your bot directory actions folder and discord bot makers action folder


Note: We ran `npm install` in a seperate directory to avoid needing to install them in both your Bot and DBM


With this loader in your bot's action folder, mods now go into the actions folder within dbmmods.

**The mod MUST contain `_MOD.js` at the end of the file to be loaded by the loader**


Supports subdirectories

     ...actions/dbmmods/actions/[yourcustomfoldername]/yourmod_MOD.js

Or directly into the folder

     ...actions/dbmmods/actions/yourmod)MOD.js


Can now include readme's among other files with your mods using this loader!
