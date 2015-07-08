/* global angular */
var app = angular.module("FirstApp",[]);
	app.controller("appCtrl",["$scope",function(s) {
		s.pack = "Amazon Paquete";
		s.newComentario = {};
		s.comentarios = [
		{
			comentario: "Excelente_Tutorial",
			usuario: "mama03",	
		},
		{
			comentario:"bueno",
			usuario:"jose02",
		}	
		];
		s.addcomentario = function() {
			s.comentarios.push(s.newComentario);
			s.newComentario = {};
		}
}]);
