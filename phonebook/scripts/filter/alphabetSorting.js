/**
 * Created by Praveen on 7/13/2015.
 */
(function IIFE() {
    angular.module('phonebook')
        .filter('sortbyAlphabet', function () {
            return function (arr, alphabet) {
                arr = arr || [];
                if (alphabet === "*")
                    return arr;
                var final = [];
                arr.forEach(function (ele) {
                    if (alphabet === ele.name.charAt(0)) {
                        final.push(ele);
                    }
                });

                return final;

            }
        })


})();