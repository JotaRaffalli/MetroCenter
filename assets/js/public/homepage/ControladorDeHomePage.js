angular.module('ModuloHomePage').controller('ControladorDeHomePage', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

	$scope.loginForm = {
		loading: false
	}

	$scope.submitLoginForm = function (){

    
    $scope.loginForm.loading = true;

    
    $http.put('/login', {
      email: $scope.loginForm.email,
      //contraseña: $scope.loginForm.password
    })
    .then(function onSuccess (response){
     // lleva a 
      $scope.usuario= response.data;
      toastr["success"]("Bienvenido: "+$scope.usuario.nombre);
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      //window.location = '/';

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

  $scope.enviarAperfil = function() {
    $http({
      url: '/perfil',
      method: "POST",
      data: { 'usuario' : $scope.usuario},
      headers: { 'Content-Type': 'application/json' }
      }).then(function(response) {
          // exito
          window.location = '/perfil';
      }, 
      function(response) { // optional
          // error
          toastr.error('No se pudo enviar la información', 'Error', {
          closeButton: true
        });
      });
  };


}]);