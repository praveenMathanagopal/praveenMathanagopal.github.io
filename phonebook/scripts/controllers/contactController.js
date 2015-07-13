/**
 * Created by Praveen on 7/8/2015.
 */
(function IIFE(){
    angular.module('phonebook')
        .controller('ContactCtrl', ['contact', 'DataBank','$location',contactController]);

    function contactController(contact, DataBank, $location){
        var contrl = this;
        contrl.contact = contact;
        console.log("hello");

        contrl.delete = function(id){
            DataBank.deleteContact(id)
                .success(function(data){
                    $location.path("#/");
                })
                .error(function(status, data){
                    console.log(status + " deletion unsuccessful");
                })
        }

    }
})();