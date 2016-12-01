/**
 * UtilesController
 *
 * @description :: Server-side logic for managing utiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	tiendaSingular: function (req,res){

		Utiles.query('select utiles.id, utiles.nombre as nombre, singular.marca as marca, utiles.cantidad as cantidad, utiles.precio as precio from utiles inner join singular where utiles.id = singular.idutiles',function(err, utiles){

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
    		console.log('antes de find one');
    		console.log(req.param('id'));
    		Utiles.findOne({id: req.param('id')}).exec(function(err, util){
				if(err) return next(err);
				if(!util) return next();
				console.log('antes de create');
				CompraUtiles.create({ iduser: req.session.me, montototal: util.precio }).exec(function afterwards(err, compra)
    			{
						if(err) return next(err);
						if(!compra) return next();
						idCompra=compra.idcompra;
						console.log('antes de update');
						Utiles.update({id: util.id},{cantidad: (util.cantidad-1)}).exec(function aftewards(err, updated){
						});
						console.log('antes de create 2');
						DetallesCompra.create({idcompra: idCompra, idutil: util.id, precio: util.precio, cantidad: 1}).exec(function afterwards(err, compra){
							if(err) return next(err);
							if(!compra) return next();
						});
						return;
				});


				

				
			});
			console.log('antes de view');
    		res.view('compra-exitosa');	
    	}
    	
    		

	},

	tiendaPaquetes: function (req, res, next){

		Paquete.query('Select utiles.id, utiles.nombre as nombre, paquete.descripcion as descripcion, utiles.cantidad as cantidad, utiles.precio as precio from utiles inner join paquete on utiles.id = paquete.idutiles',function afterwards(err, paquete){
			if(err) return next(err);
			if(!paquete) return next();

			res.view('paquete', { paquetes: paquete });
		});
	},

};

