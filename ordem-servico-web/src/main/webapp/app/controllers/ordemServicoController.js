function OrdemServicoController($scope, $state, ordensAPI) {
	// STATES
	const LIST   = 'ordem-servico.list';
	const INSERT = 'ordem-servico.insert';
	const UPDATE = 'ordem-servico.update';
	const DELETE = 'ordem-servico.delete';
	const DETAIL = 'ordem-servico.detail';
	
	// behaviors
	  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
	      switch ( toState.name ) {
	        case LIST:
	          changeToList();
	          break;
	        case INSERT:
	          changeToInsert();
	          break;
	        case UPDATE:
	          changeToUpdate(toParams.id);
	          break;
	        case DELETE:
	          changeToRemove(toParams.id);
	          break;
	        case DETAIL:
	          changeToDetail(toParams.id);
	          break;
	        case LINK:
	          changeToLink(toParams.id);
	          break;
	        default:
	          console.log('toState -  from grupo - default case');
	          break;
	      }
	  });
	  
	  function changeToList( page ) {
		    $scope.currentState = LIST;
		   /* $('#ordem-servico.list').modal({backdrop: 'static'},'show');*/
		    ordensAPI.getOrdens().success(function(data, status, headers, config) {
		          $scope.ordens = data;
		    });
	  }	
	  
	  function changeToInsert(){
		  
		  	$scope.ordem = {};
		  	$scope.ordem.numOrdem = null;
		  	$scope.ordem.solicitante = null;
		  	//$scope.ordem.dataAbertura = null;
		  	$scope.ordem.descricao = null;
		  	$scope.ordem.status = null;
		  	$scope.ordem.responsavel = null;
		  	//$scope.ordem.dataAtualizacaoStatus = null;
		  
		    $('#form-ordem-servico').modal({backdrop: 'static'},'show')
		    
	  }
	  

	$scope.insert = function(form) {
		form.$setPristine();

		ordensAPI.postOrdem().success(function(data) {
			notify({
				message : 'Ordem cadastrada com sucesso.',
				classes : 'alert-success'
			});
			$state.go(LIST);
		}).error(function(data, status) {
			if (status == 409)
				notify({
					message : 'Já existe uma ordem com mesmo nome',
					classes : 'alert-danger'
				});
			else
				notify({
					message : 'Não foi possivel cadastrar a ordem',
					classes : 'alert-danger'
				});
		});
	};
	
	

	function changeToUpdate(id) {

		$http.get(PERFIL_RESOURCE + '/' + id).success(
				function(data, status, headers, config) {
					$scope.perfil = data;

					$http.get(
							FUNCIONALIDADE_RESOURCE + '/modulo/'
									+ $scope.perfil.modulo.id).success(
							function(data, status, headers, config) {
								$scope.funcionalidades = data;

								$scope.currentState = UPDATE;
								$('#form-perfil').modal({
									backdrop : 'static'
								}, 'show');
							});
				});
	};
}