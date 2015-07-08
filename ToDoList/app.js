var app = angular.module("unaApp",["LocalStorageModule"])
app.controller("appCtrl", function($scope, LocalStorageService){
$scope.to = [];
/*
{
	Actividad: "Curso_Terminado",
	fecha: "08/07/15, 2:00Pm"
	
}
	*/
	$scope.addActv = function(){
		
		$scope.to.push($scope.newActv);
		$scope.newActv = {};
	}
});