var app = angular.module('application', []);
app.controller('appController', ['$scope', function($scope){
  //Array with data from files
  $scope.allData = [
    {
      fileName: 'en_EN.po',
      language: 'English',
      fileContent: [
        {
          msgid: 'some text',
          msgstr: ''
        },
        {
          msgid: 'some text 1',
          msgstr: ''
        },
        {
          msgid: 'some text 2',
          msgstr: ''
        },
        {
          msgid: 'some text 3',
          msgstr: ''
        }
      ]
    },
    {
      fileName: 'sw_SW.po',
      language: 'Swedish',
      fileContent: [
        {
          msgid: 'some text',
          msgstr: 'Swedish translation'
        },
        {
          msgid: 'some text 1',
          msgstr: 'Swedish translation 1'
        },
        {
          msgid: 'some text 2',
          msgstr: 'Swedish translation 2'
        },
        {
          msgid: 'some text 3',
          msgstr: 'Swedish translation 3'
        }
      ]
    }
  ];
  //A list of languages
  $scope.allLanguages = new Array();
  for(var i = 0; i < $scope.allData.length; i++){
    $scope.allLanguages.push($scope.allData[i].language);
  }
  //Current language and it's index
  $scope.currentLang = {string: 'English', number: 0};
  //Object for searching filter: searching string, searching field
  $scope.search = {str: '', by: ''};

  $scope.changeLanguage = function($index){
    $scope.currentLang.string = $scope.allLanguages[$index];
    $scope.currentLang.number = $index;
  };

  $scope.deleteLine = function($index){
    for(var i = 0; i < $scope.allData.length; i++){
      $scope.allData[i].fileContent.splice($index, 1);
    }
  };

  $scope.addLine = function(){
    for(var i = 0; i < $scope.allData.length; i++){
      $scope.allData[i].fileContent.push({msgid: $scope.newLineName, msgstr: ''});
    }
    $scope.newLineName = '';
  };
}]);
//Searches for lines that match the data from the search object
app.filter('customSearch', function(){
  return function(objects, search){
    if(search.str.length == 0 || search.by.length == 0) return objects; //if none of radio buttons are checked, do nothing
    var filtered = [];
    for(var i = 0; i < objects.length; i++){
      if(objects[i][search.by].indexOf(search.str) != -1){
        filtered.push(objects[i]);
      }
    }
    return filtered;
  };
});

/*
app.directive('required', function(){
  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl){
      if(elm.value.length == 0 && scope.)
    }
  };
});
*/