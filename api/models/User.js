/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',
  attributes: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    cellphone: {
      type: 'string'
    },
    age: {
      type: 'string'
    }
  }
};
