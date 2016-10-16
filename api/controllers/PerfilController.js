/**
 * PerfilController
 *
 * @description :: Server-side logic for managing perfils
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
      //     User.findOne({
      //     email: "raffallijoseluis@gmail.com"
      // }, function foundUser(err, user) {
      //     if (err) return res.negotiate(err);
      //     if (!user) return res.notFound();
      //     var usuario= user;
          
      //     return usuario;

      // });

    perfil: function (req, res) {

    // Si no esta loggeado que lo lleve al homepage
    if (!req.session.me) {
      return res.view('homepage');
    }

    // Sino, que busque al usuario
    User.findOne(req.session.me, function (err, user){
      if (err) {
        return res.negotiate(err);
      }

      if (!user) {
        return res.view('homepage');
      }

      return res.view('perfil', {
        me: {
          id: user.id,
          name: user.nombre,
          email: user.email,
          title: user.apellido,
          carnet: user.carnet
        }
      });

    });
  },

};

