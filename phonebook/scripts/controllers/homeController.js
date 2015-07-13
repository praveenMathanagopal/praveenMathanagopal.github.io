/**
 * Created by Praveen on 7/8/2015.
 */
(function IIFE() {
    angular.module('phonebook')
        .controller('HomeCtrl', ['DataBank', homeController]);


    function homeController(DataBank) {
        var home = this;
        home.paginationData = "*ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        home.contacts = DataBank.contacts;

        home.sortAlphabet = "*";
        home.setSortAlphabet = function (alphabet) {
            home.sortAlphabet = alphabet;
        }
        console.log("HomeCtrl...");
    }
})();
