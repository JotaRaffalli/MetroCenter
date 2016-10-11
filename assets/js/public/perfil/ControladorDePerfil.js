angular.module('myApp').controller('myCtrl', function($scope, $http) {
          User.findOne({
          email: "raffallijoseluis@gmail.com"
      }, function foundUser(err, user) {
          if (err) return res.negotiate(err);
          if (!user) return res.notFound();
          var usuario= user;
          
          return usuario;

      });
            }