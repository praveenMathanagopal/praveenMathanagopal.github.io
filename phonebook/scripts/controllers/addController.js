/**
 * Created by Praveen on 7/9/2015.
 */
(function IIFE() {
    angular.module('phonebook')
        .controller('AddCtrl', ['DataBank', '$location', addController]);

    function addController(DataBank, $location) {
        var add = this;
        console.log("add...");

        add.reset = function (form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            add.newContact = angular.copy({});
        };

        add.submit = function () {
            DataBank.addContact(add.newContact)
                .success(function (data) {
                    console.log("Insertion successful...");
                    $location.path('#/');
                })
                .error(function (data, status) {
                    console.log("Error inserting....");
                });


        }
    }
})();