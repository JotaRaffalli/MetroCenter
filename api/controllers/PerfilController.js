/**
 * PerfilController
 *
 * @description :: Server-side logic for managing perfils
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


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
        me: 
        {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          apellido: user.apellido,
          carnet: user.carnet
        }
      });

    });
  },

  updatePerfil: function (req, res) {

  var email_1 = req.param('email_1');
  var email_2 = req.param('email_2');
  var nombre = req.param('nombre');
  var apellido = req.param('apellido');
 

  console.log(email_1);
  console.log(email_2);

  User.update({email:email_1},{nombre:nombre,apellido:apellido,email:email_2}).exec(function afterwards(err, updated){

    if (err) 
    {
      return res.negotiate(err);
    }

    console.log('Se actualizo el usuario ' + updated[0].nombre);

    return res.view('homepage');

    });
  },

  compras_recientes: function (req, res) 
  {

  User.query('SELECT utiles.nombre, utiles.precio FROM user inner join comprautiles on comprautiles.iduser = user.id inner join detallescompra on comprautiles.id = detallescompra.idcompra inner join utiles on utiles.id = detallescompra.idutiles where user.id = '+req.param('id'), function(err, compras) {
  if (err) return res.serverError(err);
  console.log(compras);
  return res.view('compras-recientes', { comp: compras });
  });
  }

};

//Select utiles.nombre, utiles.precio from utiles inner detallescompra on detallescompra.idutiles