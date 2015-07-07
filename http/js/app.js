/* global angular */
var app = angular.module("FirstApp",[]);
	app.controller("appCtrl",["$scope","$http",function(s, h) {
		
	s.posts = [];
	s.newPost = {};
	h.get("http://jsonplaceholder.typicode.com/posts")
	.success(function(data) {
		console.log("DATA");
		console.log(data);
		
		s.posts = data;
	})
	.error (function(err) {	
	});
	s.addPost = function () {
	h.post("http://jsonplaceholder.typicode.com/posts",{
		
		title: s.newPost.title,
		body: s.newPost.body,
		userId: 1
	})
     .success(function(data, status,header,config) {
		 console.log("DATA-add");
		 console.log(data);
		 s.posts.push(data);
		 s.addPost = {};
		 
	 })
	 .error(function (err, status, header, config) {
		 console.log("error-add");
		 console.log(err);
	 })
	}
}]);
