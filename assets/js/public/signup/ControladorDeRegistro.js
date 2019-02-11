angular.module('ModuloDeRegistro').controller('ControladorDeRegistro', ['$scope','$http','toastr', function($scope, $http,toastr){
	
	// Ponemos la pagina en carga default falsa
	$scope.signupForm = {
		loading: false
	}


	$scope.submitSignupForm= function () { // Esta funcion es la que es llamada una vez se llene el formulario signup

		$scope.signupForm.loading = true;
		
		$http.post('/signup', {
			nombre: $scope.signupForm.name,
			apellido: $scope.signupForm.title,
			email: $scope.signupForm.email,
			carnet: $scope.signupForm.carnet,
			contraseñaEncriptada: $scope.signupForm.password
		})
		.then(function onSuccess(sailsResponse){
			window.location = '/usuario-registrado';
			

		})
		.catch(function onError(sailsResponse){
			var CarnetDuplicado = sailsResponse.status == 409;

			if (CarnetDuplicado) 
			{
				toastr.error('Disculpe, pero ese carnet ya esta en uso. Por favor intente con otro.', 'Error');
				return;
			}
		})
		.finally(function eitherWay(){
			$scope.signupForm.loading = false;
		})


	}
}]);