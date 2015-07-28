angular.module('unaApp', ['LocalStorageModule'])

.controller("appCtrl", function($scope,localStorageService){
	if(localStorageService.get('angularJS-Key')){

		$scope.todo = localStorageService.get('angularJS-Key');

	}
	else
	{
	$scope.to = [];	
	}

/*
{
	descripcion: "Curso_Terminado",
	fecha: "08/07/15, 2:00Pm"
	
}
	*/
	$scope.addActv = function(){
		
		$scope.to.push($scope.newActv);
		$scope.newActv = {};
		localStorageService.set('angularJS-Key',$scope.todo);
	}
});