{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 four51.app.controller('LoginCtrl', ['$scope', '$sce', '$route', '$window', '$location', 'User', 'autoProfileService',\
function ($scope, $sce, $route, $window, $location, User, autoProfileService) \{\
	$scope.PasswordReset = $location.search().token != null;\
	var codes = ['PasswordSecurityException'];\
\
	$scope.loginMessage = null;\
	$scope.buttonText = $scope.PasswordReset ? 'Reset Password' : "Logon";\
	$scope.$on('event:auth-loginFailed', function(event, message) \{\
		$scope.loginMessage = message;\
	\});\
\
	// build a post method for password reset\
	$scope.login = function() \{\
		$scope.loginMessage = null;\
		// need to reset any error codes that might be set so we can handle new one's\
		angular.forEach(codes, function(c) \{\
			$scope[c] = null;\
		\});\
        if ($location.search().token) \{\
            $scope.credentials.PasswordResetToken = $location.search().token;\
        \}\
		$scope.PasswordReset ? _reset() : _login();\
	\};\
\
    /*Auto Profile Logon register*/\
    $scope.loginGroups = autoProfileService.loginGroups;\
    $scope.profileInfo = \{\};\
    $scope.register = function(profileInfo) \{\
        var redirectUrl = profileInfo.GroupChoice.UrlTemplate\
                .replace('<user name>', profileInfo.Username)\
                .replace('<password>', profileInfo.Password)\
                .replace('<first name>', profileInfo.FirstName)\
                .replace('<last name>', profileInfo.LastName)\
                .replace('<email>', profileInfo.Email)\
            ;\
        $window.location.href = redirectUrl;\
    \};\
    /*Auto Profile Logon register*/\
\
    var _reset = function() \{\
		User.reset($scope.credentials,\
			function(user) \{\
				delete $scope.PasswordReset;\
				delete $scope.credentials;\
                $scope.buttonText = "Logon";\
				$location.path('catalog');\
			\},\
			function(ex) \{\
				$scope.loginMessage = $sce.trustAsHtml(ex.Message);\
			\}\
		);\
	\}\
\
	var _login = function() \{\
		User.login($scope.credentials,\
			function(data) \{\
				if ($scope.credentials.Email) \{\
					$scope.loginMessage = data.LogonInfoSent;\
					$scope.EmailNotFoundException = false;\
					$scope.showEmailHelp = false;\
					$scope.credentials.Email = null;\
					$scope.credentials.Username = null;\
					$scope.credentials.Password = null;\
				\}\
				delete $scope.credentials;\
			\},\
			function(ex) \{\
				$scope.credentials = \{\};\
				$scope[ex.Code.text] = true;\
				$scope.loginMessage = ex.Message || "User name and password not found";\
				if (ex.Code.is('PasswordSecurity'))\
					$scope.loginMessage = $sce.trustAsHtml(ex.Message);\
				if (ex.Code.is('EmailNotFoundException') && $scope.credentials.Email)\
					$scope.loginMessage = $sce.trustAsHtml(ex.Detail);\
				$scope.credentials.Username = null;\
				$scope.credentials.Password = null;\
				$scope.credentials.CurrentPassword = null;\
				$scope.credentials.NewPassword = null;\
				$scope.credentials.ConfirmPassword = null;\
			\}\
		);\
	\}\
\}]);}