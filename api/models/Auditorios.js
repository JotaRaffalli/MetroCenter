/**
 * Auditorios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'MetroCenterMysqlServer',
  attributes: {

  	nombre : { 
  		type: 'string',
  		required: true,
  	},

  	localizacion : {
  		type: 'string'
  	},

    evento : {
      type: 'string'
    },
  }
};

