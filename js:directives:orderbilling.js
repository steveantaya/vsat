{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /*override for stationery group fn*/\
four51.app.directive('orderbilling', ['Address', 'AddressList', function (Address, AddressList) \{\
    var obj = \{\
        restrict: 'AE',\
        templateUrl: 'partials/controls/orderBilling.html',\
        controller: ['$scope', function ($scope) \{\
            AddressList.clear();\
            AddressList.billing(function (list) \{\
                $scope.billaddresses = list;\
                if ($scope.isEditforApproval) \{\
                    if (!AddressList.contains($scope.currentOrder.BillAddress))\
                        $scope.billaddresses.push($scope.currentOrder.BillAddress);\
                \}\
                /*set billaddressId if stationary group*/\
                if ($scope.user.Groups[0].Name == 'Stationery') \{\
                    $scope.currentOrder.BillAddressID = $scope.billaddresses[0].ID;\
                \}\
            \});\
            $scope.billaddress = \{ Country: 'US', IsShipping: false, IsBilling: true \};\
\
            $scope.$on('event:AddressSaved', function(event, address) \{\
                if (address.IsBilling) \{\
                    $scope.currentOrder.BillAddressID = address.ID;\
                    $scope.billaddressform = false;\
                \}\
\
                AddressList.billing(function(list) \{\
                    $scope.billaddresses = list;\
                    if ($scope.isEditforApproval) \{\
                        $scope.billaddresses.push($scope.currentOrder.BillAddress);\
                    \}\
                \});\
                $scope.billaddress = \{ Country: 'US', IsShipping: false, IsBilling: true \};\
            \});\
\
            $scope.$watch('currentOrder.BillAddressID', function(newValue) \{\
                if (newValue) \{\
                    Address.get(newValue, function(add) \{\
                        if ($scope.user.Permissions.contains('EditBillToName') && !add.IsCustEditable) \{\
                            $scope.currentOrder.BillFirstName = add.FirstName;\
                            $scope.currentOrder.BillLastName = add.LastName;\
                        \}\
                        $scope.BillAddress = add;\
                    \});\
                \}\
            \});\
\
            $scope.$on('event:AddressCancel', function(event) \{\
                $scope.billaddressform = false;\
            \});\
        \}]\
    \};\
    return obj;\
\}]);\
\
four51.app.directive('billingmessage', function() \{\
    var obj = \{\
        restrict: 'E',\
        templateUrl: 'partials/messages/billing.html'\
    \};\
    return obj;\
\});}