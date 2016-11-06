/**
 * AuditoriosController
 *
 * @description :: Server-side logic for managing Auditorios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	auditorios: function (res,req,next){
		Auditorios.find().exec(function(err, auditorios){
			if(err) next(err);

			res.view('/views/espacios/auditorios');

		});
	},
};

