var crudapp=angular.module("crudapp",[]);

crudapp.controller("crudcontroller",function($scope){
$scope.records=[
    {"name":"pankaj","age":23,"address":"patvna"},
    {"name":"ankaj","age":3,"address":"patnga"},
    {"name":"kaj","age":2,"address":"patnat"},
    {"name":"aj","age":923,"address":"hpatna"},

];

console.log($scope.records);
$scope.delet = function(){
 var index=this.$index;
 $scope.records.splice(index,1)
 alert("Record will be delet")
}

$scope.adduser=function(){
//  console.log($scope.data)
$scope.records.push({
    "name":$scope.data.name,
    "age":$scope.data.age,
    "address":$scope.data.address,
})
$scope.data.name="";
$scope.data.age="";
$scope.data.address="";
}
$scope.edit=function(){

   var index=this.$index;
   $scope.edit.index=index;
   $scope.edit.updatename=$scope.records[index].name;
   $scope.edit.age=$scope.records[index].age;
   $scope.edit.address=$scope.records[index].address;
   $scope.updateblock={
    "display":"block",
    "border":"0"
   }
}
$scope.updateuser=function(){
   var ids = $scope.edit.index;
   console.log(ids);
   $scope.records[ids]={
    "name":$scope.edit.updatename,
    "age":$scope.edit.age,
    "address":$scope.edit.address,
   };
}
})