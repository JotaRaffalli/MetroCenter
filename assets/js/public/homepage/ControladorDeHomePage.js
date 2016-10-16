angular.module('ModuloHomePage').controller('ControladorDeHomePage', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

	$scope.loginForm = {
		loading: false
	}

	$scope.submitLoginForm = function (){

    
    $scope.loginForm.loading = true;

    
    $http
    .get('/login', {
        params: {
          email: $scope.loginForm.email
        }
     })
    .then(function onSuccess (response){
     // lleva a 
      var usuario = response.data;
      toastr["success"]("Bienvenido!"+$scope.usuario.nombre);
      window.location = '/';

    })
    .catch(function onError(sailsResponse) {

      if (sailsResponse.status === 400 || 404) {

          toastr.error('Email Incorrecto :c', 'Error', {
          closeButton: true
        });
        return;
      }

				  toastr.error('Ha ocurrido un error extraño o.o', 'Error', {
					closeButton: true
				});
				return;

    })
    .finally(function eitherWay(){
      $scope.loginForm.loading = false;
    });
  };


}]);