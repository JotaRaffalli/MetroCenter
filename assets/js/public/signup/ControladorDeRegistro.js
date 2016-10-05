angular.module('ModuloDeRegistro').controller('ControladorDeRegistro', ['$scope','$http', function($scope, $http){
	
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
			contraseña: $scope.signupForm.password
		})
		.then(function onSuccess(sailsResponse){
			window.location = '/successfulsignup';
			

		})
		.catch(function onError(sailsResponse){
			console.log(sailsResponse);
		})
		.finally(function eitherWay(){
			$scope.signupForm.loading = false;
		})


	}
}]);