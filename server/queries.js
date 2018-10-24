/**
 * @description Loaded with features and reputed to be FASTER than ES6 Promises.
 */
const promise = require('bluebird');

/**
 * @description Currying options into pgp
 */
const options = {
  promiseLib: promise,
};

/**
 * @description Requiring pg-promises with options object
 */
const pgp = require('pg-promise')(options);

/**
 * @description Connection obj holding required fields for Postgres.
 */
const connection = {
  host: 'tech-shard.cpbsy7aoy9ye.us-east-2.rds.amazonaws.com',
  port: 5432,
  database: 'repository',
  user: 'hufflepuffs',
  password: 'j]hj5e|gbuOxf6K',
};

/**
 * @description Initalizing db connection
 */
const db = pgp(connection);

function getCategory(req, res, next) {
  db.any('SELECT * FROM topics')
    .then(function(data) {
      res.status(200).json({
        status: 'success',
        data,
        message: 'Retrieved ALL categories',
      });
    })
    .catch(function(err){
      return next(err);
    });
}

module.exports = {
  getCategory,
};
