const { setupDatabaseEnviroment } = require('./database');

module.exports = {
	setupDatabaseEnviroment,
	default: setupDatabaseEnviroment,
};
