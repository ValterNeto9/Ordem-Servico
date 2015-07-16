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
		  	$scope.ordem.dataAbertura = null;
		  	$scope.ordem.descricao = null;
		  	$scope.ordem.status = null;
		  	$scope.ordem.responsavel = null;
		  	$scope.ordem.dataAtualizacaoStatus = null;
		  
		    $('#form-ordem-servico').modal({backdrop: 'static'},'show')
		    
	  }
}