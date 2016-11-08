/**
 * LocalesController
 *
 * @description :: Server-side logic for managing locales
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'request': function(req, res){

		res.redirect('/locales/informacion')
	},

	'informacion': function(req, res, next){
		Locales.findOne({id: 1}, function foundLocales(err, local){

			if(err) return next(err);
			if(!local) return next();
			res.view({
				local: local
			});
		});
	},
};

