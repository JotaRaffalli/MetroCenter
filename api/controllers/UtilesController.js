/**
 * UtilesController
 *
 * @description :: Server-side logic for managing utiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	tiendaSingular: function (req,res){

		Utiles.find().exec(function(err, utiles){

			res.view('singular', {
				util: utiles
			});
		});
	},

	'compraSingular': function (req, res, next){
			
	if (!req.session.me) 
	{
      return res.view('homepage');
    } 
    else 
    {
    			Utiles.findOne({id: req.param('id')}).exec(function(err, util){
				if(err) return next(err);
				if(!util) return next();


				var id = req.param('id');

				Utiles.update({id: id},{cantidad: (util.cantidad-1)}).exec(function aftewards(err, updated){
				});

				CompraUtiles.create({idutiles: id, iduser: req.session.me}).exec(function afterwards(err, compra){
				if(err) return next(err);
				if(!compra) return next();

					res.view('compra-exitosa');
					
				});
			});
    }

	}

};

