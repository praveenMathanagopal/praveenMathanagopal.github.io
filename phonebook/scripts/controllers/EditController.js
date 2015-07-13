(function IIFE(){
    angular.module('phonebook')
        .controller('EditCtrl', ['editcontact','DataBank', '$location', editController]);


    function editController(editcontact, DataBank, $location){
        var edit = this;

        edit.editContact = editcontact;

        edit.update  = function(){
            console.log("hi");
            DataBank.updateContact(edit.editContact)
                .success(function(data){
                    $location.path("#/contact/"+edit.editContact._id.$oid);
                })
                .error(function(status, data){
                    console.log(status + " deletion unsuccessful");
                })
        };

        edit.delete = function(id){
            DataBank.deleteContact(id)
                .success(function(data){
                    $location.path("#/");
                })
                .error(function(status, data){
                    console.log(status + " deletion unsuccessful");
                })
        };
    }
})();/**
 * Created by Praveen on 7/11/2015.
 */
