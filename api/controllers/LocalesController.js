/**
 * LocalesController
 *
 * @description :: Server-side logic for managing locales
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'informacion': function(req, res, next){
		Locales.findOne({id: req.param('id')}, function foundLocales(err, local){

			if(err) return next(err);
			if(!local) return next();
			res.view('informacion', {
				lcl: {
		          id: local.id,
		          nombre: local.nombre,
		          menu: local.menu,
		          horario: local.horario,
		          pagoCredito: local.pagoCredito,
		          pagoDebtio: local.pagoDebtio
		        }
			});
		});
	},
};

