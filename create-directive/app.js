var app = angular.module("routesApp", ['ngRoute']);

app.config(['$routeProvider',

function ($routeProvider) {

$routeProvider.when('/routeURL1', {

templateUrl: 'page/about.html',

controller: 'sample1Controller'

}).

when('/routeURL2', {

templateUrl: 'page/search.html',

controller: 'sample2Controller'

})

}

]);

app.controller('sample1Controller',['$scope','$log',function($scope,$log){

$scope.message={
    fname:'hello',
    lastname:'last1'

}

}])

app.controller('sample2Controller',function($scope){

$scope.message='Test Sample Page 2 URL';

})

app.directive("searchResult",function(){
  return {
     // element will deleted
    templateUrl : 'page/searchresult.html',
//    l template:' <a href="#" class="list-group-item list-group-item-action active" aria-current="true"> <div class="d-flex w-100 justify-content-between"> <h5 class="mb-1">List group item heading</h5><small>3 days ago</small> </div> <p class="mb-1">Some placeholder content in a paragraph.</p> <small>And some small print.</small> </a>',
  
}
})