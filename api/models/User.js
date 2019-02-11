/**
 * User.js
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

  	apellido : {
  		type: 'string',
  		required: true,
  	},

  	email : {
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true,
  	},   

    carnet : {
      type: 'int',
      required: true,
      unique: true,
    },

    cedula : {
      type: 'int',
      unique: true,
    },

    direccion: {
      type: 'string',
    },

    nivelDeAcceso: {
      type: 'integer',
    },

  	contraseñaEncriptada : {
  		type : 'string',
  	},

    
  }
};

