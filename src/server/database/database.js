const { Pool } = require('pg');
const redis = require("redis");

const setupDatabaseEnviroment = () => {

	const cacheQueries = process.env.CACHE_QUERIES === 'true';
	const pgPool = new Pool();
	let redisClient = null;

	if(cacheQueries) {
		redisClient = redis.createClient();
	}

	return new function() {
		this.cacheQueries = cacheQueries;
		this.pgPool = pgPool;
		this.redisClient = redisClient;

		const _me = this;

		this.query = (...args) => {
			// If cache is disabled. We simply send it off to Pg.
			if (!this.cacheQueries) {
				return this.pgPool.query.apply(this.pgPool, args);
			}
		};

		this.exec = (...args) => {
			return this.pgPool.query.apply(this.pgPool, args);
		}
	};
};

module.exports = {
	setupDatabaseEnviroment,
};
