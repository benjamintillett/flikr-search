angular.module('flikrApp',['ngMaterial'])
	.controller('ListController',['$http',function($http){
		var self = this;

		self.isSearching = false;
		self.results = [];

		self.search = function(){
			self.isSearching = true;
			$http({
				method: 'GET',
				url: 'https://api.flickr.com/services/rest',
				params: {
					method: 'flickr.photos.search',
					api_key: '1dd90de23f4db751cd24ff71abb2dde7',
					text: self.searchTerm,
					format: 'json',
					nojsoncallback: 1
				}
			}).success(function(data){
				self.isSearching = false;
				self.results = data;
			}).error(function(err){
				self.isSearching = false;
			}); 

		};
	}]);