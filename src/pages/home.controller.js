var app = angular.module('app');
app.controller('homeController', function ($state, $http, $rootScope, $timeout, $window, $transitions, $scope, $mdDialog) {
    this.SelectedIndex = 0;
    this.usage = [];
    this.primary = [];
    this.secondary = [];
    this.filter = [];
    this.compared = [];
    this.primaryValue;
    this.secondaryValue;
    this.orgResultsCount = 0;
    this.usagesize;
    this.selectedIndex = 0;
    this.showprogress = false;
    this.showresults = false;
    this.showinputs = true;

    $scope.currentProjects = undefined;
    $rootScope.currentPro = undefined;
    $scope.setData;
    //ng-class="front-and-center"

    $scope.moreClasses = "position:absolute;";
    $scope.frontAndCenter = "pr-1 ";
    $scope.currentProj = undefined;

    $scope.$watch('currentPro', function () {
        $scope.currentProjects = $rootScope.currentPro;
    });

    $rootScope.changeClass = function () {
        $scope.frontAndCenter = "pr-1";
        $scope.moreClasses = "";
    };

    $scope.classes = "md-raised md-accent compare";
    $scope.disabledFlag = false;
    $scope.disableIt = function () {
        $scope.classes = "md-raised compare";

        $scope.disabledFlag = true;
        $scope.classes = "md-raised compare";
    };


    
    $scope.newprojhandler = function () {
        if ($scope.currentProjects !== "New Project") {
            $scope.currentProj = $scope.currentProjects;
        }
        else {
            $scope.currentProjects = $scope.currentProj;
        }

    }


    $scope.revealer = function (item) {
        $rootScope.SetId = item.setId;
        $rootScope.reveal = true;
        $scope.hctrl.loadTimer($scope.hctrl);
    }

    $scope.addProjectdia = function (ev) {
        //$rootScope.reveal = false;
        $mdDialog.show({
            controller: DialogController2,
            templateUrl: 'components/dialog1.tmpl.html',
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application to prevent interaction outside of dialog
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then(function (answer) {
            $scope.changeClass();  
            //$scope.currentProjects = answer;
            $rootScope.currentPro = answer;

            //$scope.currentPro = answer;
        }, function () {
            //$scope.currentProjects = undefined;
        });
    };
    function DialogController2($scope, $mdDialog, $http) {
        $scope.newProject;
        $scope.rep;

        $scope.hide = function () {
            $mdDialog.hide();
            //$rootScope.reveal = false;
        };

        $scope.cancel = function () {
            //$scope.answer = "";
            $mdDialog.cancel();
            $mdDialog.hide();
            //$rootScope.reveal = false;
        };

        $scope.answer = function (answer) {
            var st = new Object();
            st.description = $scope.newProject;
            st.salesRep = $scope.rep;
            var content = JSON.stringify(st);
            var promise = $http.post("/api/set/" + $rootScope.accountId, content);
            promise.success(function (data) {

                $scope.currentProjects = $scope.newProject;
                $rootScope.SetId = data.setId;
                $rootScope.reveal = true;
                $mdDialog.hide($scope.newProject);
                $state.reload();
                $rootScope.changeClass();

            });

            promise.error(function () {
                $mdDialog.hide(answer);
                $rootScope.reveal = false;
            });
        };
    }

    $scope.disabledFlag = false;
    $scope.disableIt = function () {
        $scope.disabledFlag = true;
    };

    $scope.setTab = function() {
      $scope.selectedIndex.value = 0;
    }

    $scope.primaryRadioChanged = function (ctrl, item) {
        if (ctrl.secondaryValue) {//
            for (var j = 0; j < ctrl.primary.length; j++) {
                if (ctrl.primaryValue === ctrl.primary[j].fileId)
                    ctrl.primary[j].isChecked = true;
                else
                    ctrl.primary[j].isChecked = false;
            }
        } else {
            item.isChecked = true;
        }
    };

    $scope.secondaryRadioChanged = function (ctrl, item) {
        if (ctrl.secondaryValue) {
            for (var j = 0; j < ctrl.secondary.length; j++) {
                if (ctrl.secondaryValue === ctrl.secondary[j].fileId)
                    ctrl.secondary[j].isChecked = true;
                else
                    ctrl.secondary[j].isChecked = false;
            }
        } else {
            item.isChecked = true;
        }        
    };

    $scope.showAdvanced = function (ctrl, ev, id) {
        $rootScope.dialigId = id;
        ctrl.showprogress = false;
        ctrl.showresults = false;
        ctrl.showinputs = true;
        $scope.hctrl.showSuccess = false;
        $scope.hctrl.showFailedResults = false;
        
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'components/addNewFile.dialog.html',
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application to prevent interaction outside of dialog
            parent: angular.element(document.body),
            targetEvent: ev,
            scope: $scope,
            preserveScope: true,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then(function (answer) {

            $scope.currentProjects = answer;
            $scope.status = 'current project: "' + answer + '".';



        }, function () {
            //$scope.currentProjects = undefined;
            //$scope.status = 'You cancelled the dialog.';
        });
    };


    $scope.awaitResults = function (ev) {
        $scope.hctrl.showprogress = true;
        $scope.hctrl.showresults = false;
        $scope.hctrl.showinputs = false;
        $scope.hctrl.showSuccess = false;
        $scope.hctrl.showFailedResults = false;

        $scope.startCompare($scope.hctrl);
        $scope.disableIt();
        $mdDialog.show({
            controller: AwaitController,
            templateUrl: 'components/awaitDialog.html',
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application to prevent interaction outside of dialog
            parent: angular.element(document.body),
            targetEvent: ev,
            scope: $scope,
            preserveScope: true,
            clickOutsideToClose: false,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
    };




    function AwaitController($scope, $mdDialog, $http, $timeout) {
        
        setTimeout(() => { $scope.waitCompComplete(); }, 2000);
        

        $scope.hide = function () {
            
            $mdDialog.hide();
            $mdDialog.cancel();
            $scope.primaryGroup.$setPristine();
            $scope.secondaryGroup.$setPristine();
            $scope.primaryGroup.$setPristine();
            $scope.primaryGroup.$setPristine();
            
        };

        $scope.waitCompComplete = function () {
            if ($scope.hctrl.cmpResultsId) {
                var promise = $http.get("/api/Compare/progress/" + $rootScope.accountId + "/" + $scope.hctrl.cmpResultsId);
                promise.success(function (data) {
                    if (data) {
                        if (data.fileState !== "Pending") {
                            $scope.hctrl.showprogress = false;
                            $scope.hctrl.showresults = true;
                            $scope.hctrl.showinputs = false;
                            if (data.fileState === "Error") {
                                $scope.hctrl.showFailedResults = true;


                            } else {
                                $scope.hctrl.showSuccess = true;

                            }
                            $scope.resultInfo = data;
                            console.log($scope.resultInfo);

                            if ($scope.resultInfo.fileState === "Completed") {
                                console.log("$scope.resultInfo.fileState");


                            }
                            else {
                                console.log("$scope.resultInfo.fileState");

                                $scope.hctrl.showFailedResults = true;

                            }

                            $timeout(function () { $scope.hide() }, 5000);
                            setTimeout(() => { $scope.hctrl.loadResults($scope.hctrl); }, 1000);
                        } else {
                            setTimeout(() => { $scope.waitCompComplete(); }, 1000);
                        }
                    } else {
                        setTimeout(() => { $scope.waitCompComplete(); }, 1000);
                    }
                });
                promise.error(function () {
                });
            } else {
                setTimeout(() => { $scope.waitCompComplete(); }, 1000);
            }
        };           
    }




    function DialogController($scope, $mdDialog, $http) {
        $scope.description;
        $scope.startRow;
        $scope.ndcColum;
        $scope.priceColum;
        $scope.qytColum;
        $scope.hctrl.showFailedResult = false;
        $scope.hctrl.showAddSuccess = false;

        $scope.widths = "forProgressWidth";

        $scope.changeProgressWidth = function () {
            $scope.widths = "forProgressWidth1";

        }

        if ($rootScope.dialigId === "id001" || $rootScope.dialigId === "id002") {
            $scope.dialogTitle = " Price File "; 
            $scope.fType = "price";
        }      
        if ($rootScope.dialigId === "id003") {
            $scope.dialogTitle = " Usage File ";
            $scope.fType = "usage";
        } 
        if ($rootScope.dialigId === "id004") {
            $scope.dialogTitle = " Filter File ";
            $scope.fType = "filter";
        }     
        $scope.cancel = function () {
            //$scope.answer = "";
            $mdDialog.cancel();
            $mdDialog.hide();
        };
        $scope.answer = function (answer) {
            if ($scope.formdata && $scope.hctrl.showinputs === true) {
                var promise = $http.post("/api/file/ex/upload/" + $rootScope.accountId + "/" + $rootScope.SetId, $scope.formdata, { headers: { 'Content-Type': undefined } });
                promise.success(function () {
                    // now get the structure and upload the information
                    var prm = new Object();
                    prm.accountId = $rootScope.accountId;
                    prm.setId = $rootScope.SetId;
                    prm.fileType = $scope.fType;
                    prm.description = $scope.description;
                    prm.startRow = $scope.hctrl.startRow;
                    prm.ndcColumn = $scope.hctrl.ndcColumn;
                    prm.priceColumn = $scope.hctrl.priceColumn;
                    prm.qtyColumn = $scope.hctrl.qtyColumn;
                    prm.extended = 0;
                    if ($scope.hctrl.extPrice)
                        prm.extended = 1;
                    var content = JSON.stringify(prm);
                    var promise2 = $http.post("/api/file", content);
                    promise2.success(function (data) {
                        $scope.progressId = data.fileId;
                        $scope.hctrl.showprogress = true;
                        $scope.hctrl.showresults = false;
                        $scope.hctrl.showinputs = false;
                        $scope.hctrl.showAddSuccess = false;
                        $scope.hctrl.showFailedResult = false;
                        $scope.changeProgressWidth();


                        //$mdDialog.hide($scope.newProject);
                        setTimeout(() => { $scope.waitComplete(); }, 1000);
                    });
                    promise2.error(function () {
                        $mdDialog.hide(answer);
                    });
                });
                promise.error(function (a, b) {
                    $mdDialog.hide(answer);
                });
            } else {
                if ($scope.hctrl.showresults === true) {
                    $mdDialog.cancel();
                    $mdDialog.hide();
                    setTimeout(() => { $scope.hctrl.loadTimer($scope.hctrl); }, 1000);
                }
            }
                              
        };
        $scope.hide = function () {
            $mdDialog.hide();
        };
        
        $scope.waitComplete = function () {
            //$scope.changeProgressWidth();
            if ($scope.progressId) {
                var promise = $http.get("/api/file/progress/" + $rootScope.accountId + "/" + $scope.progressId);
                promise.success(function (data) {
                    if (data) {
                        if (data.fileState !== "Pending") {
                            
                            $scope.hctrl.showprogress = false;
                            $scope.hctrl.showresults = true;
                            $scope.hctrl.showinputs = false;
                            if (data.fileState === "Completed") {
                                $scope.hctrl.showFailedResult = false;

                                $scope.hctrl.showAddSuccess = true;


                            } else {
                                $scope.hctrl.showFailedResult = true;
                                $scope.hctrl.showAddSuccess = false;


                            }
                            $scope.resultInfo = data;
                            
                            //reload results
                            $scope.hctrl.loadTimer($scope.hctrl);
                        } else {
                            setTimeout(() => { $scope.waitComplete(); }, 1000);
                        }
                    } else {
                        setTimeout(() => { $scope.waitComplete(); }, 1000);
                    }
                });
                promise.error(function () {
                });
            }
        };



    }
    $scope.getTheFiles = function ($files) {
        $scope.formdata = new FormData();
        angular.forEach($files, function (value, key) {
            $scope.formdata.append(key, value);
        });
    };
    $scope.dzMethods = {};
    $scope.dzCallbacks = {
        'addedfile': function (file) {
            console.info('File added from dropzone 1.', file);
            
        }
    };
    $scope.dzOptions = {
        paramName: 'Excel',
        maxFilesize: '5000000',
        url: '/api/file/upload/' + $rootScope.accountId + "/" + $rootScope.SetId,
        addRemoveLinks: true,        
        init: function () {
            this.on("processing", function (file) {
                this.options.url = "/api/file/ex/upload/" + $rootScope.accountId + "/" + $rootScope.SetId;
            });
        }
    };

    $scope.showResults = function (ctrl, fInfo) {
        $rootScope.resultsInfo = fInfo;
    };

    $scope.startCompare = function (ctrl) {
        var prm = new Object();
        prm.accountId = $rootScope.accountId;
        prm.setId = $rootScope.SetId;
        //get the selected primary
        var j;
        for (j = 0; j < ctrl.primary.length; j++) {
            if (ctrl.primary[j].isChecked)
                prm.primaryId = ctrl.primary[j].fileId;
        }
        //get the selected secondary
        for (j = 0; j < ctrl.secondary.length; j++) {
            if (ctrl.secondary[j].isChecked)
                prm.secondaryId = ctrl.secondary[j].fileId;
        }
        //get the usage
        for (j = 0; j < ctrl.usage.length; j++) {
            if (ctrl.usage[j].isChecked) {
                if (ctrl.usage[j].fileType === "internal")
                    prm.usageId = "";
                else
                    prm.usageId = ctrl.usage[j].fileId
            }
        }
        //get the filter
        prm.brand = false;
        prm.generic = false;
        for (j = 0; j < ctrl.filter.length; j++) {
            if (ctrl.filter[j].isChecked) {
                if (ctrl.filter[j].fileType === "internal") {
                    if (ctrl.filter[j].description === "Generic")
                        prm.generic = true;
                    if (ctrl.filter[j].description === "Brand")
                        prm.brand = true;
                }
            }
        }
        var content = JSON.stringify(prm);
        var promise = $http.post("/api/compare", content);
        promise.success(function (compared) {
            ctrl.cmpResultsId = compared.fileId;
        });
        promise.error(function () {
        });                        

    };

    this.removeFile = function (ctrl, fileId) {
        setTimeout(() => { ctrl.loadTimer(ctrl); }, 2000);
    };

    this.loadResults = function (ctrl) {
        var promise = $http.get("/api/file/" + $rootScope.accountId + "/" + $rootScope.SetId + "/ResultFile");
        promise.success(function (data) {
            if (data) {
                if (data.length !== ctrl.orgResultsCount) {
                    ctrl.compared = data;
                } else {
                    setTimeout(() => { ctrl.loadResults(ctrl); }, 3000);
                }                
            }
        });
        promise.error(function () {
        });
    };

    this.loadTimer = function (ctrl) {
        if ($rootScope.SetId) {
            ctrl.loadPrimaryPriceFiles(ctrl);
            ctrl.loadSecondaryPriceFiles(ctrl);
            ctrl.loadUsageFiles(ctrl);
            ctrl.loadFilterFiles(ctrl);
            ctrl.loadResultsFiles(ctrl);
        } else {
            setTimeout(() => { ctrl.loadTimer(ctrl); }, 3000);
        }       
    };

    this.loadPrimaryPriceFiles = function (ctrl) {
        var promise = $http.get("/api/file/" + $rootScope.accountId + "/" + $rootScope.SetId + "/PriceFile");

        promise.success(function (data) {
            if (data) {
                for (var j = 0; j < data.length; j++) {
                    data[j].isChecked = false;
                }
                ctrl.primary = data;
            }
        });
        promise.error(function () {
        });
    };

    this.loadSecondaryPriceFiles = function (ctrl) {
        var promise = $http.get("/api/file/" + $rootScope.accountId + "/" + $rootScope.SetId + "/PriceFile");

        promise.success(function (data) {
            if (data) {
                for (var j = 0; j < data.length; j++) {
                    data[j].isChecked = false;
                }
                ctrl.secondary = data;
            }
        });
        promise.error(function () {
        });
    };

    this.loadUsageFiles = function (ctrl) {
        var promise = $http.get("/api/file/" + $rootScope.accountId + "/" + $rootScope.SetId + "/UsageFile");

        promise.success(function (data) {
            if (data) {
                for (var j = 0; j < data.length; j++) {
                    data[j].isChecked = false;
                }
                ctrl.usage = data;
            }
        });
        promise.error(function () {
        });
    };

    this.loadFilterFiles = function (ctrl) {
        var promise = $http.get("/api/file/" + $rootScope.accountId + "/" + $rootScope.SetId + "/FilterFile");

        promise.success(function (data) {
            if (data) {
                for (var j = 0; j < data.length; j++) {
                    data[j].isChecked = false;
                }
                ctrl.filter = data;
                ctrl.usagesize = data.length;
            }
        });
        promise.error(function () {
        });
    };

    this.loadResultsFiles = function (ctrl) {
        var promise = $http.get("/api/file/" + $rootScope.accountId + "/" + $rootScope.SetId + "/ResultFile");

        promise.success(function (data) {
            if (data) {
                ctrl.compared = data;
            }
        });
        promise.error(function () {
        });
    };

    this.loadAccounts = function (ctrl) {
        var promise = $http.get("/api/set/" + $rootScope.accountId);

        promise.success(function (data) {
            if (data) {
                $scope.setData = data;
            }
            //
        });
        promise.error(function () {
        });
    };

    this.waitAccountId = function (ctrl) {
        if ($rootScope.accountId) {
            ctrl.loadAccounts(ctrl);
        } else {
            var promise = $http.get("/api/account/login");
            promise.success(function (data) {
                if (data) {
                    $rootScope.accountId = data;
                    var promise2 = $http.get("/api/account/account/" + $rootScope.accountId);
                    promise2.success(function (info) {
                        if (info) {
                            if ($rootScope.mhCtrl) {
                                $rootScope.mhCtrl.accountName = info.accountName;
                            }
                        }
                    });
                    promise2.error(function () {
                    });
                    ctrl.loadAccounts(ctrl);
                } else {
                    if ($rootScope.mhCtrl) {
                        $rootScope.mhCtrl.accountName = "Missing or Invalid Account";
                    }
                    setTimeout(() => { ctrl.waitAccountId(ctrl); }, 500);
                }
            });
            promise.error(function () {
                setTimeout(() => { ctrl.waitAccountId(ctrl); }, 500);
            });
        }
    };
    this.initController = function (ctrl) {
        $scope.showSetSelect = false;
        setTimeout(() => { ctrl.waitAccountId(ctrl); }, 500);
        setTimeout(() => { ctrl.loadTimer(ctrl); }, 1000);
    };
    this.initController(this);

});