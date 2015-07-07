/**
 * Created by Praveen on 7/6/2015.
 */

(function IIFE() {

    angular.module("userapp")
        .controller('MainCtrl', ['DataBank', mainController]);


    function mainController(DataBank) {
        var main = this;
        //fetch the data from the factory
        DataBank.getData();
        main.userData = DataBank.userData;

        main.setCurrent = setCurrent;
        main.setPage = setPage;
        main.setPage(0);


        ////////////////////////////////////
        function setCurrent(user) {
            main.current = user;
        }

        function setPage(pageno) {
            main.pageno = pageno;
            console.log(pageno);
        }

    }
})();