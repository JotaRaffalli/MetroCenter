ngular.module('ModuloLocales').controller('ControladorDeLocales', ['$scope', '$http', 'toastr', function($scope, $http, toastr){


	$scope.BuscarLocal(){
		$http.put('/informacion', {
      	id: $scope.,
      	//contraseña: $scope.loginForm.password
    })
	}
}