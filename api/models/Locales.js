/**
 * Locales.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'MetroCenterMysqlServer',
  attributes: {

  	nombre:{
  		type: 'string',
  		required: true,
  	},

  	menu: {
  		type: 'text',
  	},

  	horario:{
  		type: 'text',
  	},

  	pagoCredito:{
  		type: 'boolean',
  	},

  	pagoDebito:{
  		type: 'boolean',
  	},

  },
};

