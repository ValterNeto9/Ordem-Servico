angular.module('ordem-servico-web').service('ordensAPI', function($http) {
	this.getOrdens = function (){
		return $http.get("app/data/ordensAPI.JSON");
	};
	this.getOrdensById = function (id){
		return $http.get("app/data/ordensAPI.JSON/"+id);
	};
	
	this.postOrdem = function(){
		return $http.post("app/data/ordensAPI.JSON");
	};
	
});