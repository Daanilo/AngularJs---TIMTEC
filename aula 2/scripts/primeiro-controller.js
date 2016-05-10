angular.module('aplicacao').controller('PrimeiroController', function($scope){
	$scope.nome = 'Danilo de Freitas';
	var nome = "Lá Lá Lá";
	
	$scope.iniciado = true;
	
	$scope.alunos = ['Uguinho', 'Zezinho', 'Luizinho', 'Cebolão'];
	
	$scope.finalizar = function () {
		$scope.iniciado = false;
	}
	
		$scope.iniciar = function () {
		$scope.iniciado = true;
	}
	
});