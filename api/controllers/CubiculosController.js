/**
 * CubiculosController
 *
 * @description :: Server-side logic for managing cubiculos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

	CargarCubiculos: function (req,res){
		Cubiculos.find().exec(function(err, cubiculos)
		{
			if(err) return res.negotiate(err);
			if(!cubiculos) return res.notFound();

			res.view('cubiculos', {
				TablaCubiculos: cubiculos
			});
		});
	},
};

