angular.module('ordem-servico-web').service('ordensAPI', function($http) {
	this.getOrdens = function (){
		return $http.get("app/data/ordensAPI.JSON");
	};
});