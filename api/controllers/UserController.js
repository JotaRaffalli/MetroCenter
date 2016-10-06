/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	  login: function (req, res) {

    
    User.findOne({
    	email: req.param('email')
    }, function UsuarioEncontrado(err, user) {
      if (err) return res.negotiate(err);
      if (!user) return res.notFound();

      alert('se encontro al usuario con id:'+user.id);

    });

  }
	
};

