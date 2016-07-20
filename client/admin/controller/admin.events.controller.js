angular.module('collegeApp')
	.controller('eventsCtrl', ['$scope','$state','adminFactory',function($scope,$state,adminFactory){

		$scope.editCourse = function(x){
		$state.go('admin.editCourse',{ 'id' : x });
		console.log(x);
	}


		activate();
function activate(){

	adminFactory.getEvents()
	.then(function(response){
		 $scope.events = response.data;
		// console.log($scope.events);
	},function(error){
		console.error(error);
	});
}
$scope.deleteEvent = function(x){
		adminFactory.deleteEvent(x)
		.then(function(response){
			alert("Event successfully deleted");
			activate();
		},function(error){
			console.log(error);

		})
	}

	}]);
