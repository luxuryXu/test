angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('BrowseCtrl', function(){
    LuckyCard.case({
      coverColor:'#ccc',ratio:'.5'
    },function(){
      alert('哈哈哈');
    });
})
.controller('FileCtrl', function($scope,$cordovaFile){
    $scope.createMyFile = function(){
      $cordovaFile.createFile(cordova.file.dataDirectory,'myFile.txt',true)
        .then(function (success) {
          alert(success);
        }, function (error) {
          alert(error);
        });
    }

    $scope.writeIn = function(){
      var text = document.getElementsByTagName('input')[0].value;
      $cordovaFile.writeFile(cordova.file.dataDirectory,'myFile.txt',text,true)
        .then(function (success) {
          alert(success);
          alert(text);
        }, function (error) {
          alert(error);
        });
    }

    $scope.readContent = function(){
      $cordovaFile.readAsText(cordova.file.dataDirectory,'myFile.txt')
        .then(function (success) {
          alert(success);
        }, function (error) {
          alert(error);
        });
    }

  });
