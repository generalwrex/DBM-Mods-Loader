var DBMMods = {};

DBMMods.Version = "1.0.0";

DBMMods.Actions = {};
DBMMods.Actions.mods = {}
DBMMods.Actions.ModCount = 0;


DBMMods.Actions.initCustomMods = function(DBM) {
	var glob = require("glob")

	glob.sync("actions/dbmmods/**/*_MOD.js").forEach(function(file){ 
		if(file.match(/\_MOD\.js/i)) {
			const action = require(require('path').join(this.location ,"../" , file));

			this[action.name] = action.action;
			if(action.mod) {
				try {
					action.mod(DBM);
				} catch(e) {
					console.error(e);
				}
			}	
			DBMMods.Actions.ModCount += 1		
		}
	}.bind(DBM.Actions));
	console.log("Initialized (" + this.ModCount  + ") DBM Mods.")
};

// This function is called by DBM when the bot is started
var customaction = {};
customaction.mod = function(DBM) {
		
	DBMMods.Actions.initCustomMods(DBM);			
};
		
module.exports = customaction; 