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
};

