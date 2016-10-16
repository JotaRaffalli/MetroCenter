angular.module('ModuloDePerfil').controller('ControladorDePerfil', function($scope, $http, userInfo) {
          User.findOne({
          email: "raffallijoseluis@gmail.com"
      }, function foundUser(err, user) {
          if (err) return res.negotiate(err);
          if (!user) return res.notFound();
          var usuario= user;
          userInfo.add(usuario);
          return usuario;

      });
     });