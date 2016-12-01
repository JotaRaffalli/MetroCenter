/**
 * UtilesController
 *
 * @description :: Server-side logic for managing utiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	tiendaSingular: function (req,res){

		Utiles.query('select utiles.nombre as nombre, singular.marca as marca, utiles.cantidad as cantidad, utiles.precio as precio from utiles inner join singular where utiles.id = singular.idutiles',function(err, utiles){

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

	},

	tiendaPaquetes: function (req, res, next){

		Paquete.query('Select utiles.nombre as nombre, paquete.descripcion as descripcion, utiles.cantidad as cantidad, utiles.precio as precio from utiles inner join paquete where utiles.id = paquete.idutiles',function afterwards(err, paquete){
			if(err) return next(err);
			if(!paquete) return next();

			res.view('paquete', { paquetes: paquete });
		});
	},

};

