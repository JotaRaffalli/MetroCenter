/**
 * AuditoriosController
 *
 * @description :: Server-side logic for managing Auditorios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	auditorios: function (req,res){
		Auditorios.find().exec(function(err, auditorios){

			res.view('auditorios', {
				audi: auditorios
			});
		});
	},
};

 