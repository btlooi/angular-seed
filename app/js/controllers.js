'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function PhoneListCtrl($scope,$http) {

  $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

  $scope.orderProp = 'age';
}

function GroupListCtrl($scope) {
  $scope.phones = [
    {"name": "GNexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}
