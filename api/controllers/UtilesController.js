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
			
		var hola = req.param('id');
		console.log(hola);


			Utiles.findOne({id: req.param('id')}).exec(function(err, util){
				if(err) return next(err);
				if(!util) return next();


				var id = req.param('id');

				Utiles.update({id: id},{cantidad: (util.cantidad-1)}).exec(function aftewards(err, updated){
				});

				CompraUtiles.create({idutiles: id, iduser: req.session.me}).exec(function afterwards(err, compra){
				if(err) return next(err);
				if(!compra) return next();

					res.view('tienda');
				});
			});
	},
	utilesMasComprados : function (req,res) {
    	Utiles.query('SELECT utiles.nombre as Nombre, carrera.nombreCarrera, count(idCompras) as Cantidad FROM carrera inner join alumnoCarrera on carrera.idCarrera = alumnoCarrera.idCarrera inner join alumno on alumnoCarrera.idUsuario = alumno.idUsuario  inner join usuario on alumno.idUsuario = usuario.idUsuario inner join utiles on comprautiles.idUsuario = usuario.idUsuario inner join detallesCompra on compraUtiles.idCompra = detallesCompra.idCompra inner join utiles on detallesCompra.idUtiles = utiles.idUtiles group by carrera.nombreCarrera, utiles.nombre'+
		'limit 3', function(err, compras) {
  			if (err) return res.serverError(err);
  			console.log(compras);
  			return res.view('best-sellers', { comp: compras });
  		});
    
  	}, 

};

