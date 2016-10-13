/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
     login: function (req, res) {

    // Intnta localizar el usuario a traves de su email
    User.findOne({
      email: req.param('email')
    }, function foundUser(err, user) {
      if (err) return res.negotiate(err);
      if (!user) return res.notFound();
      console.log(user.nombre);
      res.ok();
      return user;


     
    });

    return res;
  },

  perfil: function (req, res)
  {
      User.findOne({
      email: req.param('email')
      }, function foundUser(err, user) {
      if (err) return res.negotiate(err);
      if (!user) return res.notFound();
      console.log(user.nombre);
      res.ok();
      var usuario= user;
      res.redirect('/profile');
      return usuario;


      
     
    });
    
	}
};

