/**
 * Created by Praveen on 7/8/2015.
 */
(function IIFE() {
    angular.module('phonebook')
        .factory('DataBank', ['$http', dataBankFactory]);

    function dataBankFactory($http) {

        var obj = {};
        var url = "https://api.mongolab.com/api/1/databases/samplesdb/collections/contacts";
        //obj.url="http://tiny.cc/9h9c0x";
        //
        obj.contacts = [];
        obj.getContacts = getContacts;
        obj.getOneContact = getOneContact;
        obj.addContact = addContact;
        obj.deleteContact = deleteContact;
        obj.updateContact = updateContact;
        return obj;

        ////////////////////////////
        function getContacts() {
            $http.get(url, {
                params: {"apiKey": "qGSuEr-EpBHvBAB5HfY7QJIruzNOqSLk"}
            })
                .success(getDataSuccess)
                .error(getDataError);

            ////////////////////////////////////
            function getDataSuccess(data) {
                angular.copy(data, obj.contacts);
            }

            function getDataError() {
                console.log("Error Loading data....");
            }
        }

        function getOneContact(id) {
            return $http.get(url + "/" + id, {
                params: {"apiKey": "qGSuEr-EpBHvBAB5HfY7QJIruzNOqSLk"}
            });
        }

        function addContact(contact) {
            return $http.post(url, contact, {
                params: {"apiKey": "qGSuEr-EpBHvBAB5HfY7QJIruzNOqSLk"}
            })
        }

        function updateContact(editContact){
            return $http.put(url+"/"+ editContact._id.$oid , editContact, {
                params:{'apiKey': "qGSuEr-EpBHvBAB5HfY7QJIruzNOqSLk"}
            });
        }

        function deleteContact(id) {
            return $http.delete(url + "/" + id, {
                params: {"apiKey": "qGSuEr-EpBHvBAB5HfY7QJIruzNOqSLk"}
            });
        }

    }
})();