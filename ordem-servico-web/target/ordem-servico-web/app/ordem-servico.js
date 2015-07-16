"use strict";

angular.module('ordem-servico-web', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('ordem-servico-web', {
			url : "/",
		});
		
		$stateProvider.state('ordem-servico',{
			abstract : true,
			url : "/ordemServico",
			templateUrl : "app/views/ordemServico/ordem_servico_abstract.html",
			controller : OrdemServicoController,	
			onEnter : function( $rootScope ) {
		          $rootScope.title = "Lista de Ordens";
			}
		}).state("ordem-servico.list", {
			url : "/list",
		}).state("ordem-servico.insert", {
			url : "/new",
		}).state("ordem-servico.update", {
			url : "/edit/:id",
		}).state("ordem-servico.delete", {
			url : "/delete/:id",
		}).state("ordem-servico.detail", {
			url : "/detail/:id",
		})
		
}]);
