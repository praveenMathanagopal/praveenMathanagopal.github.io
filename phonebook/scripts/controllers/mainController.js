/**
 * Created by Praveen on 7/8/2015.
 */
(function IIFE() {
    angular.module('phonebook')
        .controller('MainCtrl', mainController);


    function mainController() {

        var main = this;
        console.log("MainCtrl....");
    }
})();