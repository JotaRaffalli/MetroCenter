/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
     login: function (req, res) {

    // Try to look up user using the provided email address
      //var usuario;
      var c = req.param('contraseñaEncriptada');
      console.log(c);
      User.findOne({
      email: req.param('email'),
      contraseñaEncriptada: req.param('contraseñaEncriptada')
    }, function foundUser(err, user) {
      if (err) return res.negotiate(err);
      if (!user) return res.notFound();
      
      console.log(user.nombre);

      req.session.me = user.id;   // Se guarda la sesión de un usuario

      return res.json(user);

      //usuario = user;
      //res=user;
      //return res;
    });

  },

};

