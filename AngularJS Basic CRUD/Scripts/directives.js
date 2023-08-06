/// <reference path="Libs/angular.js" />
/// <reference path="Libs/angular-route.js" />

'use strict';
angular.module('FactorFoxApp.directives', [])
.directive('optionsClass', [function ($parse) {
    return {
        //require: ['select','option'],
        link: function (scope, elem, attrs) {
            if (elem[0].tagName == "SELECT") {
                //get the source for items array that populates the select.
                var optionsSourceStr = attrs.ngOptions.split(' ').pop(),

                //use $parse to get a function from options-class attribute.
                getOptionsClass = $parse(attrs.optionsClass);

                scope.$watch(optionsSourceStr, function (items) {
                    //when the options source changes loop through its items.
                    angular.forEach(items, function (item, index) {
                        //evaluate against the item to get a mapping object for classes.
                        var classes = getOptionsClass(item);

                        //get option by looking for appropriate index in value attribute.
                        //var option = elem.find('option[value=' + * + ']'); //Not work.
                        var option = elem.children()[index];

                        //loop through the key/value pairs in mapping object and conditinally apply classes.
                        //use Array.some for breaking loop after matching.
                        //classes.some(function (type, className) {});
                        //But need iterate all possible classes...
                        angular.forEach(classes, function (type, className) {
                            if ((type == "placeholder" && index == 0) ||
                                (type != "placeholder" && index > 0)) {
                                angular.element(option).addClass(className);
                            }
                        });
                    });
                });
            }
            else if (elem[0].tagName == "OPTION") {
                //Used if placeholder item is included in server data return.
                getOptionsClass = $parse(attrs.optionsClass);
                var classes = getOptionsClass();
                angular.forEach(classes, function (type, className) {
                    if ((type == "placeholder" && elem[0].parentElement.children.length == 1) ||
                        (type != "placeholder" && elem[0].parentElement.children.length > 1)) {
                        angular.element(elem).addClass(className);
                    }
                });
            }
        }
    };
}])
 .directive('restrictInput', [function () {
     return {
         restrict: 'A',
         link: function (scope, element, attrs) {
             var ele = element[0];
             var regex = RegExp(attrs.restrictInput);
             var value = ele.value;

             ele.addEventListener('keydown', function (event) {
                 if (event.shiftKey == true) {
                     event.preventDefault();
                 }
                 if ((event.keyCode >= 48 && event.keyCode <= 57) ||
                     (event.keyCode >= 96 && event.keyCode <= 105) ||
                     event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 ||
                     event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190 || event.keyCode == 110) {

                 } else {
                     event.preventDefault();
                 }

                 if ($(this).val().indexOf('.') !== -1 && event.keyCode == 190)
                     event.preventDefault();
                 //if a decimal has been added, disable the "."-button             
             });
         }
     };
 }])

.directive('convertToNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function (val) {
                return val != null ? parseInt(val, 10) : null;
            });
            ngModel.$formatters.push(function (val) {
                return val != null ? '' + val : null;
            });
        }
    };
})
    .directive('numberInput', function ($filter) {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModelCtrl) {

                ngModelCtrl.$formatters.push(function (modelValue) {
                    return setDisplayNumber(modelValue, true);
                });

                // it's best to change the displayed text using elem.val() rather than
                // ngModelCtrl.$setViewValue because the latter will re-trigger the parser
                // and not necessarily in the correct order with the changed value last.
                // see http://radify.io/blog/understanding-ngmodelcontroller-by-example-part-1/
                // for an explanation of how ngModelCtrl works.
                ngModelCtrl.$parsers.push(function (viewValue) {
                    setDisplayNumber(viewValue);
                    return setModelNumber(viewValue);
                });

                // occasionally the parser chain doesn't run (when the user repeatedly 
                // types the same non-numeric character)
                // for these cases, clean up again half a second later using "keyup"
                // (the parser runs much sooner than keyup, so it's better UX to also do it within parser
                // to give the feeling that the comma is added as they type)
                elem.bind('keyup focus', function () {
                    setDisplayNumber(elem.val());
                });
                function setDisplayNumber(val, formatter) {
                    var valStr, displayValue;

                    if (typeof val === 'undefined') {
                        return 0;
                    }

                    valStr = val.toString();
                    displayValue = valStr.replace(/,/g, '').replace(/[A-Za-z]/g, '');
                    displayValue = parseFloat(displayValue);
                    displayValue = (!isNaN(displayValue)) ? displayValue.toString() : '';

                    // handle leading character -/0
                    if (valStr.length === 1 && valStr[0] === '-') {
                        displayValue = valStr[0];
                    } else if (valStr.length === 1 && valStr[0] === '0') {
                        displayValue = '';
                    } else {
                        displayValue = $filter('number')(displayValue);
                    }
                    // handle decimal
                    if (!attrs.integer) {
                        if (displayValue.indexOf('.') === -1) {
                            if (valStr.slice(-1) === '.') {
                                displayValue += '.';
                            } else if (valStr.slice(-2) === '.0') {
                                displayValue += '.0';
                            } else if (valStr.slice(-3) === '.00') {
                                displayValue += '.00';
                            }
                        } // handle last character 0 after decimal and another number
                        else {
                            if (valStr.slice(-1) === '0') {
                                displayValue += '0';
                            }
                        }
                    }

                    if (attrs.positive && displayValue[0] === '-') {
                        displayValue = displayValue.substring(1);
                    }

                    if (typeof formatter !== 'undefined') {
                        return (displayValue === '') ? 0 : displayValue;
                    } else {
                        elem.val((displayValue === '0') ? '' : displayValue);
                    }
                }
                function setModelNumber(val) {
                    var modelNum = val.toString().replace(/,/g, '').replace(/[A-Za-z]/g, '');
                    modelNum = parseFloat(modelNum);
                    modelNum = (!isNaN(modelNum)) ? modelNum : 0;
                    if (modelNum.toString().indexOf('.') !== -1) {
                        modelNum = Math.round((modelNum + 0.00001) * 100) / 100;
                    }
                    if (attrs.positive) {
                        modelNum = Math.abs(modelNum);
                    }
                    return modelNum;
                }
            }
        };
    })
.directive('icheck', [function ($timeout, $parse) {
    return {
        require: 'ngModel',
        link: function ($scope, element, $attrs, ngModel) {
            //return //$timeout(
            //function () {
            var value;
            value = $attrs['value'];

            $scope.$watch($attrs['ngModel'], function (newValue) {
                $(element).iCheck('update');
            });

            $scope.$watch($attrs['ngDisabled'], function (newValue) {
                $(element).iCheck(newValue ? 'disable' : 'enable');
                $(element).iCheck('update');
            })

            return $(element).iCheck({
                checkboxClass: 'icheckbox_md',
                radioClass: 'iradio_md'

            }).on('ifChanged', function (event) {
                if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                    $scope.$apply(function () {
                        return ngModel.$setViewValue(event.target.checked);
                    })
                }
            }).on('ifClicked', function (event) {
                if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                    return $scope.$apply(function () {
                        //set up for radio buttons to be de-selectable
                        if (ngModel.$viewValue != value)
                            return ngModel.$setViewValue(value);
                        else
                            ngModel.$setViewValue(null);
                        ngModel.$render();
                        return
                    });
                }
            });
            // });
        }
    }
}]).directive('chars', ['$timeout', function ($timeout) {

    /* RegEx Examples:
        - email: "0-9a-zA-Z@._\-"
        - numbers only: "0-9"
        - letters only: "a-zA-Z"
        Email Usage Example:
        <input type="text" name="email" ng-model="user.email" chars="0-9a-zA-Z@._\-" />
    */
    'use strict';
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function ($scope, $elem, attrs, $ctrl) {

            var regReplace,
                preset = {
                    'only-numbers': '0-9\\-',
                    'numbers': '0-9\\s',
                    'only-letters': 'A-Za-z',
                    'letters': 'A-Za-z\\s',
                    'email': '\\wÑñ@._\\-',
                    'alpha-numeric': '\\w\\s',
                    'latin-alpha-numeric': '\\w\\sÑñáéíóúüÁÉÍÓÚÜ´¨',
                    'bank-name': 'A-Za-z\\[\\]\\s\\ _&./\\-',
                    'phone': '0-9\\()\\_&./#$%*&+=\\-',
                    'decimalNumber': '0-9\\.',
                    'only_int': '0-9'
                },
                filter = preset[attrs.chars] || attrs.chars;

            $elem.on('input keyup change', function () {

                var val = $elem.val().toString();

                regReplace = new RegExp('[^' + filter + ']', 'ig');
                $ctrl.$setViewValue(val.replace(regReplace, ''));
                $timeout(function () {

                    $ctrl.$render();

                });

            });

        }
    };

}]).directive("decimals", function ($filter) {
    return {
        restrict: "A", // Only usable as an attribute of another HTML element
        require: "?ngModel",
        scope: {
            decimals: "@",
            decimalPoint: "@"
        },
        link: function (scope, element, attr, ngModel) {
            var decimalCount = parseInt(scope.decimals) || 2;
            var decimalPoint = scope.decimalPoint || ".";

            // Run when the model is first rendered and when the model is changed from code
            ngModel.$render = function () {
                if (ngModel.$modelValue != null && ngModel.$modelValue >= 0) {
                    if (typeof decimalCount === "number") {
                        element.val(ngModel.$modelValue.toFixed(decimalCount).toString());
                    } else {
                        element.val(ngModel.$modelValue.toString());
                    }
                }
            }

            // Run when the view value changes - after each keypress
            // The returned value is then written to the model
            ngModel.$parsers.unshift(function (newValue) {
                if (typeof decimalCount === "number") {
                    var floatValue = parseFloat(newValue);
                    if (decimalCount === 0) {
                        return parseInt(floatValue);
                    }
                    return parseFloat(floatValue.toFixed(decimalCount));
                }

                return parseFloat(newValue);
            });

            // Formats the displayed value when the input field loses focus
            element.on("change", function (e) {
                var floatValue = parseFloat(element.val().replace(",", "."));
                if (!isNaN(floatValue) && typeof decimalCount === "number") {
                    if (decimalCount === 0) {
                        element.val(parseInt(floatValue));
                    } else {
                        var strValue = floatValue.toFixed(decimalCount);
                        element.val(strValue.replace(".", decimalPoint));
                    }
                }
            });
        }
    }
}).directive('formAutofillFix', function () {
    return {

        restrict: 'A',
        link: function ($scope, el, attr) {

            el.bind('change', function (e) {

                e.preventDefault();

            })
        }
    }


}).directive('ngGuru', [function () {


    return {

        link: function ($scope, $element, $attr, ctrl) {

            $element.on('keyup', function () {

                if ($element.attr('type') === 'search') {
                    if ($element.val().length > 0) {
                        $element.attr('type', 'password');
                        $scope.setPassword = false;
                    }
                } else if ($element.val() == "") {
                    $element.attr('type', 'search');
                    $element.removeAttr('autocomplete');
                    $element.attr('autocomplete', 'new-password');
                    $element.blur();
                    $element.focus();

                }
            });


        },
    }
}]).directive('onReadFile', function ($parse) {
    return {
        restrict: 'A',
        scope: {
            onReadFile: "&"
        },
        link: function (scope, element, attrs) {
            element.on('change', function (e) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    scope.$apply(function () {
                        scope.onReadFile({ $content: e.target.result });
                    });
                };
                reader.readAsText((e.srcElement || e.target).files[0]);
            });
        }
    };
});

//.directive('decimalNumber', [function () {

//    return {
//        restrict: 'A',
//        require: 'ngModel',

//        link: function (scope, element, attrs, ngModel) {
//            debugger;
//            function parser(value) {
//                var show = scope.$eval(attrs.decimalNumber);
//                if (show == '0') {
//                    return '0.0';

//                }
//                else {
//                    return show;
//                }
//            }

//            ngModel.$parsers.push(parser);
//        }
//    };
//}]);


