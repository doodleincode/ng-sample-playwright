'use strict'

angular.module('app').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        // 2nd modal is tagged with ng-cloak
        when('/with', {
          template: '<button ng-click="openModal1($event)">Open 1st Modal</button>',
          controller: function ($scope, $mdDialog) {
            $scope.openModal1 = function (ev) {
              $mdDialog.show({
                escapeToClose: false,
                multiple: true,
                parent: angular.element(document.body),
                targetEvent: ev,
                template: `
                  <md-dialog>
                    <md-toolbar>
                      <div class="md-toolbar-tools">
                        <h2>Modal One</h2>
                      </div>
                    </md-toolbar>
                    <md-dialog-content>
                      <div class="p-20 text-center w-80 h-32">
                        <button ng-click="openModal2($event)">Open 2nd Modal</button>
                      </div>
                    </md-dialog-content>
                    <md-dialog-actions layout="row">
                      <md-button ng-click="close()">
                        Close
                      </md-button>
                    </md-dialog-actions>
                  </md-dialog>
                `,
                controller: function ($scope, $mdDialog) {
                  $scope.openModal2 = function (ev) {
                    $mdDialog.show({
                      multiple: true,
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      template: `
                        <md-dialog ng-cloak>
                          <md-toolbar>
                            <div class="md-toolbar-tools">
                              <h2>Modal Two</h2>
                            </div>
                          </md-toolbar>
                          <md-dialog-content>
                            <div class="p-20 text-center">
                              <span>Hi!</span>
                            </div>
                          </md-dialog-content>
                          <md-dialog-actions layout="row">
                            <md-button ng-click="close()">
                              Close
                            </md-button>
                          </md-dialog-actions>
                        </md-dialog>
                      `,
                      controller: function ($scope, $mdDialog) {
                        $scope.close = function () {
                          $mdDialog.cancel()
                        }
                      },
                    })
                  }

                  $scope.close = function () {
                    $mdDialog.cancel()
                  }
                },
              })
            }
          }
        }).

        // Modals without ng-cloak
        when('/without', {
          template: '<button ng-click="openModal1($event)">Open 1st Modal</button>',
          controller: function ($scope, $mdDialog) {
            $scope.openModal1 = function (ev) {
              $mdDialog.show({
                escapeToClose: false,
                multiple: true,
                parent: angular.element(document.body),
                targetEvent: ev,
                template: `
                  <md-dialog>
                    <md-toolbar>
                      <div class="md-toolbar-tools">
                        <h2>Modal One</h2>
                      </div>
                    </md-toolbar>
                    <md-dialog-content>
                      <div class="p-20 text-center w-80 h-32">
                        <button ng-click="openModal2($event)">Open 2nd Modal</button>
                      </div>
                    </md-dialog-content>
                    <md-dialog-actions layout="row">
                      <md-button ng-click="close()">
                        Close
                      </md-button>
                    </md-dialog-actions>
                  </md-dialog>
                `,
                controller: function ($scope, $mdDialog) {
                  $scope.openModal2 = function (ev) {
                    $mdDialog.show({
                      multiple: true,
                      parent: angular.element(document.body),
                      targetEvent: ev,
                      template: `
                        <md-dialog>
                          <md-toolbar>
                            <div class="md-toolbar-tools">
                              <h2>Modal Two</h2>
                            </div>
                          </md-toolbar>
                          <md-dialog-content>
                            <div class="p-20 text-center">
                              <span>Hi!</span>
                            </div>
                          </md-dialog-content>
                          <md-dialog-actions layout="row">
                            <md-button ng-click="close()">
                              Close
                            </md-button>
                          </md-dialog-actions>
                        </md-dialog>
                      `,
                      controller: function ($scope, $mdDialog) {
                        $scope.close = function () {
                          $mdDialog.cancel()
                        }
                      },
                    })
                  }

                  $scope.close = function () {
                    $mdDialog.cancel()
                  }
                },
              })
            }
          }
        }).

        otherwise('/without');
    }
  ])
